import { useState } from "react";
import "./Profile.css";

function Profile() {
  const [firstName, setFirstName] = useState("Dubois");
  const [lastName, setLastName] = useState("Jean");
  const [email, setEmail] = useState("jeandubois@gmail.com");
  const [age, setAge] = useState("75");
  const [occupation, setOccupation] = useState("Dealer");
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

          <div className="profileContainer">
            <h2>Mon Profil d'utilisateur</h2>
            <div className="profileLine2">
              <label htmlFor="">Nom : </label>
              <div>{lastName}</div>
            </div>

            <div className="profileLine2">
              <label htmlFor="">Prénom:</label>
              <div>{firstName}</div>
            </div>

            <div className="profileLine2">
              <label htmlFor="">Âge:</label>
              <div>{age}</div>
            </div>

            <div className="profileLine2">
              <label htmlFor="">Occupation: </label>
              <div>{occupation}</div>
            </div>

            <div className="profileLine2">
              <label htmlFor="">Email: </label>
              <div>{email}</div>
            </div>
            <div className="buttonStyle">
              <button className="editButton" onClick={handleClickEdit}>
                Modifier
              </button>
            </div>
          </div>
        </>
      ) : edit === true ? (
        <>
          <div className="editProfileContainer">
            <h2> Modifier Mon Profil d'utilisateur</h2>
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
            <div className="buttonStyle">
              <button className="editButton" onClick={handleClickEdit}>
                Valider
              </button>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default Profile;
