import "./Profile.css";

function Profile() {
    const[firstName,setFirstName]
    const[lastName,setLastName]
    const [email,setEmail]
    const [age,setAge]
    const [occupation,setOccupation]

  return (
    <div className="profilewrapper">
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

      </div>
    </div>
  );
}
