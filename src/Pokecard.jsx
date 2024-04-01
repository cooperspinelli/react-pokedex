import './Pokecard.css';

function pokemonImageUrl(id) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
}

function Pokecard({ name, id, type, base_experience }) {
    return (<div className="Pokecard-container">
        <h5>{name}</h5>
        <img src={pokemonImageUrl(id)}/>
        <p>Type: {type}</p>
        <p>Exp: {base_experience}</p>
    </div>)
}

export default Pokecard;