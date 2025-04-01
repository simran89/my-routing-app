"use client";
import React, { useState } from "react";

// Define a type for the API response
interface Definition {
  definition: string;
}

interface Meaning {
  definitions: Definition[];
}

interface WordResponse {
  meanings: Meaning[];
}

function FetchWordDefinition() {
  const [word, setWord] = useState("digital");
  const [definition, setDefinition] = useState<string | null>("");

  const fetchDefinition = () => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((response) => response.json())
      .then((data: WordResponse[]) => {
        // Safely extract definitions
        if (data && data[0] && data[0].meanings) {
          const meanings = data[0].meanings
            .map((meaning) => meaning.definitions[0]?.definition)
            .filter((def) => def)  // Remove any undefined or null values
            .join("; ");
          setDefinition(meanings || "No definitions found.");
        } else {
          setDefinition("No definitions found.");
        }
      })
      .catch((error) => {
        console.error("Error fetching definition:", error);
        setDefinition("Error fetching definition.");
      });
  };

  return (
    <div>
      <h2>Word Definition</h2>
      <input
        type="text"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        placeholder="Enter a word"
      />
      <button onClick={fetchDefinition}>Fetch Definition</button>
      {definition ? <p>{definition}</p> : <p>Loading...</p>}
    </div>
  );
}

export default FetchWordDefinition;
