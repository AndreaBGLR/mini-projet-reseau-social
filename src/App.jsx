import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from "./Auth/Login/LoginForm";
import Register from "./Auth/Register/Register";
import Logout from "./Auth/Logout/Logout";
import Footer from "./Footer/Footer";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/logout" component={<Logout />} />
                {/* Autres routes */}
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
