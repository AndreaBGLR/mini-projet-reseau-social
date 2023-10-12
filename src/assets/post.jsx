import { useEffect, useState } from "react";

function Post() {
  const apiUrl =
    "https://social-network-api.osc-fr1.scalingo.io/serial-viewer/post";
  const [post, setPost] = useState("");
  const [posts, setPosts] = useState([]);

  function createPost() {
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "blablatitre",
        content: "blablacontent",
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erreur de réseau - ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Nouveau post créé :", data);
        fetchPosts();
      })
      .catch((error) => {
        console.error("Erreur : " + error);
      });
  }

  function fetchPosts() {
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erreur de réseau - ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.error("Erreur : " + error);
      });
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Créer un post</h2>
      <form>
        <label>
          De quoi veut tu parler?
          <input
            placeholder="Titre du post"
            type="text"
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
          />
        </label>
        <br />
        <label>
          Dit moi tout BG
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

export default Post;
