import Card from "../card/card";
import NavBar from "../navBar/navBar";
import './searchPage.css'

function SearchPage (props){
    console.log('test', props.array);
    
    return (

        <div className="container">
            <div className="navContainer">
                <NavBar/>
            </div>
            <div className="autre">
                <div className="searchBar">

                </div>

                <div className="cardContainer">
                    <Card/>
                </div>
            </div>


        </div>
    )
}
export default SearchPage