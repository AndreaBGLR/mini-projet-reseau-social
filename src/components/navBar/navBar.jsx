import { Link } from "react-router-dom";
import "./navBar.css";
import Logout from "../../Auth/Logout/Logout";

function NavBar(props) {
    /* console.log(props.tableu[0]); */
    return (
        <div className="nav">
            <div className="idSite">
                {/*                 <div className="titre">
                    <p>Serial viewer</p>
                </div> */}
                <div className="navImage">
                    <div className="image">
                        <a
                            href="https://youtu.be/KZ6HqUztGJ0?t=43"
                            target="_blank"
                        >
                            <button className="imageUn"></button>
                        </a>
                    </div>
                    <div className="tete"></div>
                    {/* <img src={""} alt="logo" /> */}
                </div>
            </div>
            <nav>
                <Logout />
            </nav>
            <br></br>
            <br></br>
            <nav className="home lien">
                <Link to={"/"}>Accueil</Link>
            </nav>
            <br></br>
            <br></br>
            <nav className="login lien">
                <Link to={"/LoginForm.jsx"}>Connexion</Link>
            </nav>
            <nav className="register lien">
                <Link to={"/Register.jsx"}>Creer un Compte</Link>
            </nav>
            <nav className="profile lien">
                <Link to={"/Profile.jsx"}>Editer Profil</Link>
            </nav>
            <br></br>
            <br></br>
            <nav className="search lien">
                <Link to={"/search"}>Chercher un film</Link>
            </nav>
            <nav className="create lien">
                <Link to={"/CreatePost.jsx"}>Créer un post</Link>
            </nav>
            <nav className="render lien">
                <Link to={"/RecupPosts.jsx"}>Afficher Posts</Link>
            </nav>
            <nav className="search lien">
                <Link to={"/searchPosts.jsx"}>Chercher un Post</Link>
            </nav>
        </div>
    );
}
export default NavBar;
