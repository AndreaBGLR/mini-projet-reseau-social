import React, { useState } from "react";

const apiKey = "cff2dc83"; // clé API OMDB correcte
const apiUrl = "http://www.omdbapi.com/";
const socialApiUrl =
    "https://social-network-api.osc-fr1.scalingo.io/serial-viewer/";

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const searchMovies = () => {
        fetch(`${apiUrl}?apikey=${apiKey}&s=${searchTerm}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.Response === "True") {
                    setSearchResults(data.Search);

                    // Envoyer les résultats de recherche à votre API
                    sendResultsToSocialApi(data.Search);
                } else {
                    setSearchResults([]);
                }
            })
            .catch((error) => {
                console.error("Une erreur s'est produite :", error);
            });
    };

    const sendResultsToSocialApi = (results) => {
        fetch(socialApiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ results }),
        })
            .then((response) => response.json())
            .then((data) => {
                // réponse de votre API ici si nécessaire
            })
            .catch((error) => {
                console.error(
                    "Erreur lors de l'envoi des résultats à votre API :",
                    error
                );
            });
    };

    return (
        <div className="App">
            <input
                type="text"
                placeholder="Entrez un nom de film"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={searchMovies}>Rechercher</button>
            <ul>
                {searchResults.map((movie) => (
                    <li key={movie.imdbID}>
                        <strong>{movie.Title}</strong> ({movie.Year})
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SearchBar;
