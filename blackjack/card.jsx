
function Card({ id }) {
    return (<div>
        <img src={`https://deckofcardsapi.com/static/img/${id}.png`} />
    </div>);
}

export default Card;