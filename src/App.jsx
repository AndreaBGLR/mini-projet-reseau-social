import { useState } from "react";
import Post from "./assets/post";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LoginForm from "./Auth/Login/LoginForm";
import Register from "./Auth/Register/Register";
import Logout from "./Auth/Logout/Logout";
import Footer from "./Footer/Footer";
import RecupPosts from "./assets/affichagepost";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/logout" component={<Logout />} />
          <Route path="/post" element={<Post />} /> {/* Autres routes */}
          <Route path="/affichagepost" element={<RecupPosts />} />{" "}
          {/* Autres routes */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
export default App;
