import './Pokecard.css';


/** Renders pokemon card from pokemon data
 * Props: { name, id, type, base_experience }
 */
function Pokecard({ name, id, type, base_experience }) {
    return (<div className="Pokecard-container">
        <h5>{name}</h5>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}/>
        <p>Type: {type}</p>
        <p>Exp: {base_experience}</p>
    </div>)
}

export default Pokecard;