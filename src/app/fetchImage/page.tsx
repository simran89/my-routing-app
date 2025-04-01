"use client";
import React, { useEffect, useState } from "react";

function FetchImage() {
    const [imageUrl, setImageUrl] = useState("");
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        const fetchImage = () => {
            fetch(`https://picsum.photos/200/300?random=${Date.now()}`)
                .then((response) => setImageUrl(response.url))
                .catch((error) => console.error("Error fetching image:", error));
        };

        fetchImage(); // Fetch the first image immediately
        const id = setInterval(fetchImage, 2000);
        setIntervalId(id);

        return () => clearInterval(id); // Cleanup when unmounted
    }, []);

    const stopTimer = () => {
        clearInterval(intervalId);
        setIntervalId(null); // Set to null to indicate the timer is stopped
    };

    return (
        <div>
            <h2>Random Image from Picsum</h2>
            {imageUrl ? <img src={imageUrl} alt="Random" width="200" height ="200" /> : <p>Loading...</p>}
            <br />
            <button onClick={stopTimer} disabled={!intervalId}>
                Stop Timer
            </button>
        </div>
    );
}

export default FetchImage;
