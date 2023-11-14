import React, { useEffect, useState } from "react";

function Ex06_useEffect() {
    const [vetor, setVetor] = useState([]);
    const [status, setStatus] = useState("Loading photos...");

    useEffect(() => {
        getPhotos();
    });

    const getPhotos = async () => {
        const photos = await fetch(
            "https://jsonplaceholder.typicode.com/photos"
        );
        const photosJson = await photos.json();

        setVetor(photosJson);
        setStatus("Photos Loaded!");
    };

    return (
        <div>
            <h1>{status}</h1>
            <ul>
                {vetor.map((photo) => (
                    <li key={photo.id}>{photo.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default Ex06_useEffect;
