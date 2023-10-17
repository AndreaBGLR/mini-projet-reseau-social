import React, { useState } from "react";
import "./post.css";
import RecupPosts from "./affichagepost";
import NavBar from "../components/navBar/navBar";

function CreatePost() {
  const apiUrl =
    "https://social-network-api.osc-fr1.scalingo.io/serial-viewer/post";
  const [post, setPost] = useState({ title: "", content: "" });
  const [token, setToken] = useState(localStorage.getItem("token"));
  async function createPost() {
    if (!token) {
      console.error("token pas recup");
      return;
    }
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify(post),
      });

      if (!response.ok) {
        throw new Error(`Erreur de réseau - ${response.status}`);
      }

      const data = await response.json();
      console.log("Nouveau post créé :", data);
      setPost({ title: "", content: "" });
      alert("le post a été crée");
    } catch (error) {
      console.error("Erreur : " + error);
    }
  }

  return (
    <div>
      <NavBar />
      <h2>Créer un post</h2>
      <form>
        <label>
          De quoi veux-tu parler?
          <input
            placeholder="Titre du post"
            type="text"
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
          />
        </label>
        <br />
        <label>
          Dis-moi tout BG
          <textarea
            placeholder="Contenu du post"
            value={post.content}
            onChange={(e) => setPost({ ...post, content: e.target.value })}
          ></textarea>
        </label>
        <br />
        <button type="button" onClick={createPost}>
          Créer le Post
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
