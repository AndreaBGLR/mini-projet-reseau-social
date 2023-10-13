import './card.css'

function Card(props){

    console.log('card: ', props.tableau);
    let image = props.tableau.Poster
    
    return(
        <div className="card">
            <div className="cardImage">
                <img src={`${props.tableau.Poster}`} alt="" />
            </div>

            <div className="cardText">
                <div>
                    {props.tableau.Title}  
                </div>
                <div>
                    {props.tableau.Year}
                </div>
                <div>
                    {props.tableau.Type}
                </div>

            </div>
        </div>
    )
}
export default Card