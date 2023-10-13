import React, { useState, useEffect } from "react";

function SearchPosts() {
    const [searchTerm, setSearchTerm] = useState("");
    const [allPosts, setAllPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchAllPosts = () => {
        setLoading(true);
        fetch(
            "https://social-network-api.osc-fr1.scalingo.io/serial-viewer/post"
        )
            .then((response) => response.json())
            .then((data) => {
                setAllPosts(data);
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
        const filtered = allPosts.filter((post) => {
            return (
                post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.content.toLowerCase().includes(searchTerm.toLowerCase())
            );
        });
        setFilteredPosts(filtered);
    };

    return (
        <div>
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
                        {filteredPosts.map((result, index) => (
                            <li key={index}>{result.title}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default SearchPosts;
