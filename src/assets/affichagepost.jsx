import React, { useState, useEffect } from "react";
import "./post.css";

function RecupPosts() {
  const apiUrlRecup =
    "https://social-network-api.osc-fr1.scalingo.io/serial-viewer/posts?page=1&limit=10";
  const [posts, setPosts] = useState([]);
  async function recupPosts() {
    try {
      const response = await fetch(apiUrlRecup, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Erreur de réseau - ${response.status}`);
      }

      const dataget = await response.json();
      console.log(dataget.posts);
      setPosts(dataget.posts);
    } catch (error) {
      console.error("Erreur : " + error);
    }
  }
  useEffect(() => {
    recupPosts();
  }, []);

  return (
    <div>
      <h2>Posts Existants</h2>
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecupPosts;
