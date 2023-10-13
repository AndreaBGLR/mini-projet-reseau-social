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
                <Link to={"/"}> Accueil</Link>
            </nav>

            <nav className="search lien">
                <Link to={"/search"}>chercher</Link>
            </nav>

            <nav className="render lien">
                <Link to={"/renderPost"}>render</Link>
            </nav>

            <nav className="create lien">
                <Link to={"/createPost"}>create</Link>
            </nav>
        </div>
    );
}
export default NavBar;
