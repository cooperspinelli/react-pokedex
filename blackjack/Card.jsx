
const BASE_CARD_URL = 'https://deckofcardsapi.com/static/img/'

/** Takes in card id prop and renders card image */
function Card({ id }) {
    return (<div>
        <img src={`${BASE_CARD_URL}${id}.png`} />
    </div>);
}

export default Card;