import PokemonElement from "../PokemonElement/PokemonElement";
import classes from './PokemonList.module.css';

const PokemonList = (props) => {

    return(<ul className={classes['pokemon-list']}>
        {props.pokemons.map((pokemon, index) => <PokemonElement
        name = {pokemon.name}
        id = {pokemon.id}
        img = {pokemon.img}
        type = {pokemon.type}
        key = {index}
        />)}
    </ul>)
}

export default PokemonList;