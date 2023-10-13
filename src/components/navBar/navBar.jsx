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
            </div>
            <nav className="home lien">
                <Link to={"/src/components/home/Home.jsx"}>Accueil</Link>
            </nav>
            <nav className="login lien">
                <Link to={"/src/Auth/Login/LoginForm.jsx"}>Connexion</Link>
            </nav>
            <nav className="logout lien">
                <Link to={"/src/Auth/Logout/Logout.jsx"}>Déconnexion</Link>
            </nav>
            <nav className="register lien">
                <Link to={"/src/Auth/Register/Register.jsx"}>
                    Creer un Compte
                </Link>
            </nav>
            <nav className="profile lien">
                <Link to={"/src/components/Profile/Profile.jsx"}>
                    Editer Profil
                </Link>
            </nav>
            <nav className="search lien">
                <Link to={"/search"}>Chercher un film</Link>
            </nav>
            <nav className="search lien">
                <Link to={"/src/searchPosts/searchPosts.jsx"}>
                    Chercher un KOM
                </Link>
            </nav>
            <nav className="render lien">
                <Link to={"/src/assets/affichagepost.jsx"}>Afficher Posts</Link>
            </nav>
            <nav className="create lien">
                <Link to={"/src/assets/post.jsx"}>Faire un post</Link>
            </nav>
        </div>
    );
}
export default NavBar;
