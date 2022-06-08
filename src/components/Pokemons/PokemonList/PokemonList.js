import PokemonElement from "../PokemonElement/PokemonElement";
import classes from './PokemonList.module.css';
import {useGlobalContext} from '../../../context';

const PokemonList = ({pokemon}) => {

    // const {allPokemons} = useGlobalContext();

    return(<ul className={classes['pokemon-list']}>
        {pokemon ? pokemon.map((pokemon, index) => <PokemonElement
        name = {pokemon.name}
        id = {pokemon.id}
        img = {pokemon.img}
        type = {pokemon.type}
        key = {index}
        />) : [] }
    </ul>)
}

export default PokemonList;