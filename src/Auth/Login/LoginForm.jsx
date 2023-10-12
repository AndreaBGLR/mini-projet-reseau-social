import React, { useState } from "react";
import "./Login.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"; // hook pour rediriger vers une page

function LoginForm() {
    const [email, setEmail] = useState(localStorage.getItem("email") || "");
    const [password, setPassword] = useState(
        localStorage.getItem("password") || ""
    );
    const navigate = useNavigate();

    // Fonction pour gérer la soumission du formulaire
    async function handleSubmit() {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        };

        setEmail(""); // Effacer les champs email et mot de passe
        setPassword("");

        const response = await fetch(
            `https://social-network-api.osc-fr1.scalingo.io/serial-viewer/login`,
            options
        );

        const data = await response.json();

        // Stocker les informations de connexion dans le localStorage
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        localStorage.setItem("token", data.token);

        if (data.success) {
            navigate("/home"); // Rediriger vers la page d'accueil si la connexion réussit
        } else {
            alert("Identifiant ou mot de passe incorrect, veuillez réessayer");
        }
    }

    function goToRegister() {
        navigate("/register"); // Fonction pour rediriger vers la page d'inscription
    }

    return (
        <div className="connexion">
            <div className="middle">
                <div className="container">
                    <h1 className="pageTitle">Connexion</h1>
                    <div className="field">
                        <label htmlFor="email">Identifiant</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control"
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="password">Mot de passe</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control"
                        />
                    </div>
                    <div className="buttonValider">
                        <button onClick={handleSubmit}>Valider</button>
                    </div>
                    <div className="buttonRegister">
                        <button onClick={goToRegister}>Créer un Compte</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
