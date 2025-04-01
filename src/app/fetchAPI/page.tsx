"use client"
import React, { useState } from "react";

function FetchWordDefinition() {
  const [word, setWord] = useState("digital");
  const [definition, setDefinition] = useState("");

  const fetchDefinition = () => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((response) => response.json())
      .then((data) => {
        const meanings = data[0].meanings.map((meaning: { definitions: { definition: any; }[]; }) => meaning.definitions[0].definition).join("; ");
        setDefinition(meanings);
      })
      .catch((error) => console.error("Error fetching definition:", error));
  };

  return (
    <div>
      <h2>Word Definition</h2>
      <input
        type="text"
        value={word}
        onChange={(e) => setWord(e.target.value)}
      />
      <button onClick={fetchDefinition}>Fetch Definition</button>
      {definition ? <p>{definition}</p> : <p>Loading...</p>}
    </div>
  );
}

export default FetchWordDefinition;