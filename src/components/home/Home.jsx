import NavBar from "../navBar/navBar";
import "./home.css";
import ApiFilm from "../api/apiFilm";
import LoginForm from "../../Auth/Login/LoginForm";

function Home(props) {
    return (
        <div className="homeContainer">
            {/* <ApiFilm></ApiFilm> */}
            <div className="navContainer">
                <NavBar />
            </div>
        </div>
    );
}
export default Home;
