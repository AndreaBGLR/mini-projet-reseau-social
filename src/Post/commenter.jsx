// import React, { useState } from "react";

// function Commenter({ postId }) {
//   const apiUrlCom =
//     "https://social-network-api.osc-fr1.scalingo.io/serial-viewer/post/comment";
//   const [token, setToken] = useState(localStorage.getItem("token"));
//   const [com, setCom] = useState("");
//   const [comments, setComments] = useState([]);

//   async function commenter() {
//     try {
//       const response = await fetch(apiUrlCom, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: "bearer " + token,
//         },
//         body: JSON.stringify({
//           postId,
//           content: com,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error(`Erreur de réseau - ${response.status}`);
//       }

//       const dataCom = await response.json();
//       console.log(dataCom);
//       setComments([...comments, com]);
//       setCom("");
//     } catch (error) {
//       console.error("Erreur : " + error);
//     }
//   }

//   return (
//     <div className="comments-section">
//       <div>
//         <input
//           onChange={(e) => setCom(e.target.value)}
//           name="inputCom"
//           type="text"
//           placeholder="Commenter"
//           value={com}
//         />
//         <button onClick={commenter} type="button">
//           Commenter
//         </button>
//         <h2>Commentaires</h2>
//         {comments.map((comment, index) => (
//           <p key={index}>{comment}</p>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Commenter;
