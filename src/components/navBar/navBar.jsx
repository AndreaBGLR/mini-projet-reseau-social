import { Link } from "react-router-dom";
import "./navBar.css";

function NavBar(props) {
    /* console.log(props.tableu[0]); */
    return (
        <div className="nav">
            <div className="idSite">
                <div className="titre">
                    <p>Serial viewer</p>
                </div>
                <div className="navImage">
                    <img src={""} alt="logo" />
                </div>
            </div>
            <nav className="home lien">
                <Link to={"/"}>Accueil</Link>
            </nav>
            <nav className="login lien">
                <Link to={"/LoginForm.jsx"}>Connexion</Link>
            </nav>
            <nav className="logout lien">
                <Link to={"/Logout.jsx"}>Déconnexion</Link>
            </nav>
            <nav className="register lien">
                <Link to={"/Register.jsx"}>Creer un Compte</Link>
            </nav>
            <nav className="profile lien">
                <Link to={"/Profile.jsx"}>Editer Profil</Link>
            </nav>
            <nav className="search lien">
                <Link to={"/search"}>Chercher un film</Link>
            </nav>
            <nav className="search lien">
                <Link to={"/searchPosts.jsx"}>Chercher un Post</Link>
            </nav>
            <nav className="render lien">
                <Link to={"/RecupPosts.jsx"}>Afficher Posts</Link>
            </nav>
            <nav className="create lien">
                <Link to={"/CreatePost.jsx"}>Faire un post</Link>
            </nav>
        </div>
    );
}
export default NavBar;
