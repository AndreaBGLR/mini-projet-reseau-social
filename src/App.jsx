import { useState } from "react";
import Post from "./assets/post";
import "./App.css";
import LoginForm from "./Auth/Login/LoginForm";
import Register from "./Auth/Register/Register";
import Logout from "./Auth/Logout/Logout";
import Footer from "./Footer/Footer";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/logout" component={<Logout />} />
          {/* Autres routes */}
        </Routes>
        <h1>LE TITRE</h1>
        <Post />
        <Footer />
      </Router>
    </>
  );
}

export default App;
