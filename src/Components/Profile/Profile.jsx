import { useState } from "react";
import "./Profile.css";

function Profile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [occupation, setOccupation] = useState("");
  const [edit, setEdit] = useState(false);

  function handleClickEdit() {
    if (edit) {
      // fonctionpourupdate();
    }
    setEdit(!edit);
  }

  return (
    <>
      {edit === false ? (
        <>
          {/* navbar */}
          <div className="profileBanner"></div>

          <h1>Profil d'utilisateur</h1>

          <div className="profileContainer">
            <label htmlFor="">Nom :</label>
            <div>{lastName}</div>

            <label htmlFor="">Prénom :</label>
            <div>{firstName}</div>

            <label htmlFor="">Âge :</label>
            <div>{age}</div>

            <label htmlFor="">Occupation :</label>
            <div>{occupation}</div>

            <label htmlFor="">Email :</label>
            <div>{email}</div>

            <button className="editButton" onClick={handleClickEdit}>
              Modifier
            </button>
          </div>
        </>
      ) : edit === true ? (
        <>
          <div className="profileBanner"></div>

          <h1>Profil d'utilisateur</h1>

          <div className="profileContainer">
            <label htmlFor="">Nom :</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="formEdit"
            />

            <label htmlFor="">Prénom :</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="formEdit"
            />

            <label htmlFor="">Âge :</label>
            <input
              type="text"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="formEdit"
            />

            <label htmlFor="">Occupation :</label>
            <input
              type="text"
              value={occupation}
              onChange={(e) => setOccupation(e.target.value)}
              className="formEdit"
            />

            <label htmlFor="">Email :</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="formEdit"
            />
            <button className="editButton" onClick={handleClickEdit}>
              Valider
            </button>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
}
