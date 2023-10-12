import React, { useState } from "react";

function CreatePost({ onPostCreated }) {
  const apiUrl =
    "https://social-network-api.osc-fr1.scalingo.io/serial-viewer/post";
  const [post, setPost] = useState({ title: "", content: "" });

  async function createPost() {
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "bearer token",
        },
        body: JSON.stringify(post),
      });

      if (!response.ok) {
        throw new Error(`Erreur de réseau - ${response.status}`);
      }

      const data = await response.json();
      console.log("Nouveau post créé :", data);
      onPostCreated();
    } catch (error) {
      console.error("Erreur : " + error);
    }
  }

  return (
    <div>
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
