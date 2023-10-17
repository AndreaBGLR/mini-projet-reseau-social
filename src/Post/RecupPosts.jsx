import React, { useState, useEffect } from "react";
import "./RecupPosts.css";
import NavBar from "../components/navBar/navBar";

function RecupPosts() {
  const apiUrlLike =
    "https://social-network-api.osc-fr1.scalingo.io/serial-viewer/post/like";
  const apiUrlCom =
    "https://social-network-api.osc-fr1.scalingo.io/serial-viewer/post/comment";
  const apiUrlRecup =
    "https://social-network-api.osc-fr1.scalingo.io/serial-viewer/posts?page=1";
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [posts, setPosts] = useState([]);
  const [com, setCom] = useState("");
  // Use local state for comments
  const [commentStates, setCommentStates] = useState({});
  const [like, setLike] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  async function commenter(postId) {
    try {
      const response = await fetch(apiUrlCom, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "bearer " + token,
        },
        body: JSON.stringify({
          postId: postId,
          content: com,
        }),
      });

      if (!response.ok) {
        throw new Error(`Erreur de réseau - ${response.status}`);
      }

      const dataCom = await response.json();
      console.log(dataCom);
      setCommentStates({ ...commentStates, [postId]: "" });
      recupPosts();
    } catch (error) {
      console.error("Erreur : " + error);
    }
  }

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
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  useEffect(() => {
    recupPosts();
  }, []);

  async function liker(postId) {
    try {
      const response = await fetch(apiUrlLike, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "bearer " + token,
        },
        body: JSON.stringify({
          postId: postId,
        }),
      });

      if (!response.ok) {
        throw new Error(`Erreur de réseau - ${response.status}`);
      }

      const data = await response.json();
      console.log("data", data);
      setLike({ ...like, [postId]: "" });
      recupPosts();
    } catch (error) {
      console.error("Erreur : " + error);
    }
  }

  console.log(posts);

  return (
    <div className="galactic-container">
      <NavBar />
      <h2>Posts Existants</h2>
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <div className="comments-section">
              <div>
                <input
                  onChange={(e) => setCom(e.target.value)}
                  name="inputCom"
                  type="text"
                  placeholder="Commenter"
                  defaultValue=""
                />
                <button onClick={() => commenter(post._id)} type="button">
                  Commenter
                </button>{" "}
                {post.comments.lenght > 0 && <h2>Commentaires :</h2>}
                {post.comments?.map((com) => (
                  <p key={com.id}>{com.content}</p>
                ))}
              </div>
              {/* {console.log("but",post)} */}
              <button onClick={() => liker(post._id)} type="submit">
                Like
              </button>
              {post.likes.length}
            </div>
          </li>
        ))}
      </ul>
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Page précédente
        </button>
        <button onClick={() => handlePageChange(currentPage + 1)}>
          Page suivante
        </button>
      </div>
    </div>
  );
}

export default RecupPosts;
