import React, { useState, useEffect } from "react";
import NavBar from "../components/navBar/navBar";

function SearchPosts() {
    const [searchTerm, setSearchTerm] = useState("");
    const [allPosts, setAllPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    // Fonction de vérification du token
    const isTokenValid = (token) => {
        console.log("token", token);
        const storedToken = localStorage.getItem("token");
        return token === storedToken;
    };

    const fetchAllPosts = () => {
        setLoading(true);
        fetch(
            "https://social-network-api.osc-fr1.scalingo.io/serial-viewer/posts?page=2&limit=10",
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )
            .then((response) => {
                if (response.status === 401) {
                    // erreur d'authentification
                    throw new Error("Non autorisé");
                }
                if (response.status !== 200) {
                    // autres erreurs HTTP
                    throw new Error("Erreur HTTP " + response.status);
                }
                return response.json();
            })
            .then((data) => {
                // Vérifier que le token est correct

                setAllPosts(data.posts);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Une erreur s'est produite :", error);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchAllPosts();
    }, []);

    useEffect(() => {
        filterPosts();
    }, [searchTerm, allPosts]);

    const filterPosts = () => {
        if (Array.isArray(allPosts)) {
            const filtered = allPosts.filter((post) => {
                return (
                    post.title
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                    post.content
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
                );
            });
            setFilteredPosts(filtered);
        } else {
            // allPosts n'est pas un tableau, définir filteredPosts sur un tableau vide.
            setFilteredPosts([]);
        }
    };

    return (
        <div>
            <NavBar />
            <h1>Recherche de Posts</h1>
            <div>
                <input
                    type="text"
                    placeholder="Rechercher par titre ou contenu"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            {loading ? (
                <p>Chargement en cours...</p>
            ) : (
                <div>
                    <h2>Résultats de la recherche :</h2>
                    <ul>
                        {filteredPosts.map((result) => (
                            <li key={result.id}>{result.title}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default SearchPosts;
