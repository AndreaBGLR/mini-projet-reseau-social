import React, { useState, useEffect } from "react";
import "./post.css";
import NavBar from "../components/navBar/navBar";

function RecupPosts() {
  const apiUrlLike = "https://social-network-api.osc-fr1.scalingo.io/serial-viewer/post/like";
  const apiUrlCom =
    "https://social-network-api.osc-fr1.scalingo.io/serial-viewer/post/comment";
  const apiUrlRecup =
    "https://social-network-api.osc-fr1.scalingo.io/serial-viewer/posts?page=1&limit=10";
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [posts, setPosts] = useState([]);
  const [com, setCom] = useState("");
  // Use local state for comments
  const [commentStates, setCommentStates] = useState({});
  const [like, setLike] = useState({});

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

  useEffect(() => {
    recupPosts();
  }, []);


  async function liker(postId) {

    console.log('efzev' ,postId);
    /* setLike({id: likeId._id, firstname: likeId.firstname, lastname: likeId.lastname }) */


    try {
        const response = await fetch(apiUrlLike, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "bearer " + token,
        },
        body :JSON.stringify({
          postId: postId,
        })
        })
        
      if (!response.ok) {
        throw new Error(`Erreur de réseau - ${response.status}`);
      }

      const data = await response.json()

      (console.log('rver' , data))
      setLike({...like, [postId]: ""});
      recupPosts();

    } catch (error) {
      console.error("Erreur : " + error);
    }
  }

  console.log(posts);

  return (
    <div>
      <NavBar />
      <h2>Posts Existants</h2>
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <div>
              {" "}
              <h4>Commentaires : </h4>
              {post.comments?.map((com) => (
                <p key={com.id}>{com.content}</p>
              ))}
              <div className="com">
                <input
                  onChange={(e) => setCom(e.target.value)}
                  name="inputCom"
                  type="text"
                  placeholder="Commenter"
                  defaultValue=""
                />
                <button onClick={() => commenter(post._id)} type="button">
                  Commenter
                </button>
              </div>
               {/* {console.log("but",post)} */}
               <button onClick={() => liker(post)} type="submit">Like</button>
               {post.likes.length}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecupPosts;
