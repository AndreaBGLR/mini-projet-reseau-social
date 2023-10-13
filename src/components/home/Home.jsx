import NavBar from "../navBar/navBar"
import './home.css'
import ApiFilm from "../api/apiFilm"

function Home(props) {
    return (
        <div className="homeContainer">
            <div className="navContainer">
                <NavBar/>
            </div>

            <section>
                <div className="titreHome">
                    <div className="titre">
                        <h1>Serial viewer</h1>
                    </div> 
                </div>

                <div className="topFilm">
                    <div className="affichageTop">

                    </div>
                    <div className="affichageList">

                    </div>
                </div>
                <div className="topSerie">
                    <div className="affichageTop">

                    </div>
                    <div className="affichageList">
    
                    </div>
                </div>
            </section>


        </div>

    )
}
export default Home