import Card from "../card/card";
import NavBar from "../navBar/navBar";
import './searchPage.css'
import ApiFilm from "../api/apiFilm";
import { useState } from "react";



function SearchPage (props){
    /* console.log('search', props.tableau.original_title); */
    
    const [array ,setArray] = useState([{"Title":"The Avengers","Year":"2012","Rated":"PG-13","Released":"04 May 2012","Runtime":"143 min","Genre":"Action, Sci-Fi","Director":"Joss Whedon","Writer":"Joss Whedon, Zak Penn","Actors":"Robert Downey Jr., Chris Evans, Scarlett Johansson","Plot":"Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.","Language":"English, Russian","Country":"United States","Awards":"Nominated for 1 Oscar. 38 wins & 80 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.0/10"},{"Source":"Rotten Tomatoes","Value":"91%"},{"Source":"Metacritic","Value":"69/100"}],"Metascore":"69","imdbRating":"8.0","imdbVotes":"1,434,660","imdbID":"tt0848228","Type":"movie","DVD":"22 Jun 2014","BoxOffice":"$623,357,910","Production":"N/A","Website":"N/A","Response":"True"},
    {"Title":"Avengers: Age of Ultron","Year":"2015","Rated":"PG-13","Released":"01 May 2015","Runtime":"141 min","Genre":"Action, Adventure, Sci-Fi","Director":"Joss Whedon","Writer":"Joss Whedon, Stan Lee, Jack Kirby","Actors":"Robert Downey Jr., Chris Evans, Mark Ruffalo","Plot":"When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan.","Language":"English, Korean","Country":"United States","Awards":"8 wins & 52 nominations","Poster":"https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.3/10"},{"Source":"Rotten Tomatoes","Value":"76%"},{"Source":"Metacritic","Value":"66/100"}],"Metascore":"66","imdbRating":"7.3","imdbVotes":"900,297","imdbID":"tt2395427","Type":"movie","DVD":"08 Sep 2015","BoxOffice":"$459,005,868","Production":"N/A","Website":"N/A","Response":"True"},
    {"Title":"Deadpool","Year":"2016","Rated":"R","Released":"12 Feb 2016","Runtime":"108 min","Genre":"Action, Comedy","Director":"Tim Miller","Writer":"Rhett Reese, Paul Wernick","Actors":"Ryan Reynolds, Morena Baccarin, T.J. Miller","Plot":"A wisecracking mercenary gets experimented on and becomes immortal yet hideously scarred, and sets out to track down the man who ruined his looks.","Language":"English","Country":"United States","Awards":"29 wins & 78 nominations","Poster":"https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.0/10"},{"Source":"Rotten Tomatoes","Value":"85%"},{"Source":"Metacritic","Value":"65/100"}],"Metascore":"65","imdbRating":"8.0","imdbVotes":"1,089,965","imdbID":"tt1431045","Type":"movie","DVD":"21 Apr 2016","BoxOffice":"$363,070,709","Production":"N/A","Website":"N/A","Response":"True"},
    {"Title":"Deadpool 2","Year":"2018","Rated":"R","Released":"18 May 2018","Runtime":"119 min","Genre":"Action, Adventure, Comedy","Director":"David Leitch","Writer":"Rhett Reese, Paul Wernick, Ryan Reynolds","Actors":"Ryan Reynolds, Josh Brolin, Morena Baccarin","Plot":"Foul-mouthed mutant mercenary Wade Wilson (a.k.a. Deadpool) assembles a team of fellow mutant rogues to protect a young boy with supernatural abilities from the brutal, time-traveling cyborg Cable.","Language":"English, Cantonese, Spanish, Russian","Country":"United States","Awards":"6 wins & 52 nominations","Poster":"https://m.media-amazon.com/images/M/MV5BMDkzNmRhNTMtZDI4NC00Zjg1LTgxM2QtMjYxZDQ3OWJlMDRlXkEyXkFqcGdeQXVyNTU5MjkzMTU@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.6/10"},{"Source":"Rotten Tomatoes","Value":"84%"},{"Source":"Metacritic","Value":"66/100"}],"Metascore":"66","imdbRating":"7.6","imdbVotes":"620,262","imdbID":"tt5463162","Type":"movie","DVD":"07 Aug 2018","BoxOffice":"$324,591,735","Production":"N/A","Website":"N/A","Response":"True"},
    {"Title":"The Avengers","Year":"2012","Rated":"PG-13","Released":"04 May 2012","Runtime":"143 min","Genre":"Action, Sci-Fi","Director":"Joss Whedon","Writer":"Joss Whedon, Zak Penn","Actors":"Robert Downey Jr., Chris Evans, Scarlett Johansson","Plot":"Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.","Language":"English, Russian","Country":"United States","Awards":"Nominated for 1 Oscar. 38 wins & 80 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.0/10"},{"Source":"Rotten Tomatoes","Value":"91%"},{"Source":"Metacritic","Value":"69/100"}],"Metascore":"69","imdbRating":"8.0","imdbVotes":"1,434,660","imdbID":"tt0848228","Type":"movie","DVD":"22 Jun 2014","BoxOffice":"$623,357,910","Production":"N/A","Website":"N/A","Response":"True"},
    {"Title":"Avengers: Age of Ultron","Year":"2015","Rated":"PG-13","Released":"01 May 2015","Runtime":"141 min","Genre":"Action, Adventure, Sci-Fi","Director":"Joss Whedon","Writer":"Joss Whedon, Stan Lee, Jack Kirby","Actors":"Robert Downey Jr., Chris Evans, Mark Ruffalo","Plot":"When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan.","Language":"English, Korean","Country":"United States","Awards":"8 wins & 52 nominations","Poster":"https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.3/10"},{"Source":"Rotten Tomatoes","Value":"76%"},{"Source":"Metacritic","Value":"66/100"}],"Metascore":"66","imdbRating":"7.3","imdbVotes":"900,297","imdbID":"tt2395427","Type":"movie","DVD":"08 Sep 2015","BoxOffice":"$459,005,868","Production":"N/A","Website":"N/A","Response":"True"},
    {"Title":"Deadpool","Year":"2016","Rated":"R","Released":"12 Feb 2016","Runtime":"108 min","Genre":"Action, Comedy","Director":"Tim Miller","Writer":"Rhett Reese, Paul Wernick","Actors":"Ryan Reynolds, Morena Baccarin, T.J. Miller","Plot":"A wisecracking mercenary gets experimented on and becomes immortal yet hideously scarred, and sets out to track down the man who ruined his looks.","Language":"English","Country":"United States","Awards":"29 wins & 78 nominations","Poster":"https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.0/10"},{"Source":"Rotten Tomatoes","Value":"85%"},{"Source":"Metacritic","Value":"65/100"}],"Metascore":"65","imdbRating":"8.0","imdbVotes":"1,089,965","imdbID":"tt1431045","Type":"movie","DVD":"21 Apr 2016","BoxOffice":"$363,070,709","Production":"N/A","Website":"N/A","Response":"True"},
    {"Title":"Deadpool 2","Year":"2018","Rated":"R","Released":"18 May 2018","Runtime":"119 min","Genre":"Action, Adventure, Comedy","Director":"David Leitch","Writer":"Rhett Reese, Paul Wernick, Ryan Reynolds","Actors":"Ryan Reynolds, Josh Brolin, Morena Baccarin","Plot":"Foul-mouthed mutant mercenary Wade Wilson (a.k.a. Deadpool) assembles a team of fellow mutant rogues to protect a young boy with supernatural abilities from the brutal, time-traveling cyborg Cable.","Language":"English, Cantonese, Spanish, Russian","Country":"United States","Awards":"6 wins & 52 nominations","Poster":"https://m.media-amazon.com/images/M/MV5BMDkzNmRhNTMtZDI4NC00Zjg1LTgxM2QtMjYxZDQ3OWJlMDRlXkEyXkFqcGdeQXVyNTU5MjkzMTU@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.6/10"},{"Source":"Rotten Tomatoes","Value":"84%"},{"Source":"Metacritic","Value":"66/100"}],"Metascore":"66","imdbRating":"7.6","imdbVotes":"620,262","imdbID":"tt5463162","Type":"movie","DVD":"07 Aug 2018","BoxOffice":"$324,591,735","Production":"N/A","Website":"N/A","Response":"True"}])
    

console.log('search' ,array);
    return (
        <div>
            <div className="container">
                <div className="navContainer">
                    <NavBar/>
                </div>
                
                <div className="autre">
                    <div className="searchBar">

                    </div>

                    <div className="cardContainer">

                        {array ? (array.map((valeur, index) => (
                            <Card tableau={valeur} index={index} key={index}/>
                        ))) :
                        (console.log("salut"))}
                        


                    </div>
                </div>


            </div>            
        </div>

    )
}
export default SearchPage