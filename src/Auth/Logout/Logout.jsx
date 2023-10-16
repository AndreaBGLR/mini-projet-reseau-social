import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../Footer/Footer";
import NavBar from "../../components/navBar/navBar";

function Logout() {
    const navigate = useNavigate();

    // Fonction de déconnexion
    function handleLogout() {
        // Supprimer les informations de connexion du localStorage
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        localStorage.removeItem("token");

        // Rediriger l'utilisateur vers la page de connexion
        navigate("/src/Auth/Login/LoginForm.jsx");
    }

    return (
        <div>
            <div className="navContainer">
                {" "}
                <NavBar />
            </div>
            <div className="deco">
                <p>Êtes-vous sûr de vouloir vous déconnecter ?</p>
                <button onClick={handleLogout}>Déconnexion</button>
            </div>
            <Footer />
        </div>
    );
}

export default Logout;
