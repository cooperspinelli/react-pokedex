import Pokecard from "./Pokecard";

/**
 * Is provided, via props, an array of objects describing different pokemon,
 * and renders a sequence of Pokecard components.
 */
function Pokedex({ pokemon, totalExp, isWinner }) {

    return (
        <div className="Pokedex-container">
            <p>Total Experience: {totalExp}</p>
            {pokemon.map(p => (
                <Pokecard
                id={p.id}
                name={p.name}
                type={p.type}
                base_experience={p.base_experience} />
            ))}
            <h6>{isWinner ? "This hand Wins :)" : "This hand loses :("}</h6>
        </div>
    );
}

export default Pokedex;