import React, { useEffect, useState } from "react";

function RenderPosts() {
  const apiUrl =
    "https://social-network-api.osc-fr1.scalingo.io/serial-viewer/post";
  const [posts, setPosts] = useState([]);

  async function fetchPosts() {
    try {
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`Erreur de réseau - ${response.status}`);
      }

      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("Erreur : " + error);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Posts Existants</h2>
      <ul>
        {posts.map((p) => (
          <li key={p.id}>
            <h3>{p.title}</h3>
            <p>{p.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RenderPosts;
