import React from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
    const navigate = useNavigate();

    // Fonction de déconnexion
    function handleLogout() {
        // Supprimer les informations de connexion du localStorage
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        localStorage.removeItem("token");

        // Rediriger l'utilisateur vers la page de connexion
        navigate("/login");
    }

    return (
        <div>
            <p>Êtes-vous sûr de vouloir vous déconnecter ?</p>
            <button onClick={handleLogout}>Déconnexion</button>
            <Footer />
        </div>
    );
}

export default Logout;
