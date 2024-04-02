 import Card from "./Card";
import choice from "./helpers";

 const CARD_TO_SCORE = {
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "0": 10,
    "J": 10,
    "Q": 10,
    "K": 10,
    "A": 11
 }

const SUITS = ['H', 'D', 'C', 'S']
const RANKS = ['2','3','4','5','6','7','8','9','0','J','Q','K','A']

/** Returns a random card id */
function generateRandomCard() {
    return choice(RANKS) + choice(SUITS);
}

/** Returns array that contains two random card id's like ["4H", "7S"] */
function generateHand() {
    const card1 = generateRandomCard();
    let card2 = generateRandomCard();
    while (card2 === card1) {
        card2 = generateRandomCard();
    }
    return [card1, card2]
}

/** Renders two cards and their combined value */
function Game() {
    const [card1, card2] = generateHand();
    const handVal = CARD_TO_SCORE[card1[0]] + CARD_TO_SCORE[card2[0]]

    return (<div>
        <Card id={card1}/>
        <Card id={card2}/>
        <p>Value = {handVal}</p>
        <h5>{handVal === 21 ? "BlackJack!" : ""} </h5>
    </div>)
}

export default Game;