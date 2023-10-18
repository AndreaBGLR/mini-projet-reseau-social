import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../Footer/Footer";
import NavBar from "../../components/navBar/navBar";

function LogoutButton() {
    const navigate = useNavigate();

    // Fonction de déconnexion
    function handleLogout() {
        // Utiliser window.confirm pour demander la confirmation de l'utilisateur
        const isConfirmed = window.confirm(
            "Êtes-vous sûr de vouloir vous déconnecter ?"
        );

        if (isConfirmed) {
            // Supprimer les informations de connexion du localStorage
            localStorage.removeItem("email");
            localStorage.removeItem("password");
            localStorage.removeItem("token");

            // Rediriger l'utilisateur vers la page de connexion
            navigate("/LoginForm.jsx");
        }
    }

    return <button onClick={handleLogout}>Déconnexion</button>;
}

function Logout() {
    return (
        <div className="logout lien">
            <LogoutButton />
        </div>
    );
}

export default Logout;
