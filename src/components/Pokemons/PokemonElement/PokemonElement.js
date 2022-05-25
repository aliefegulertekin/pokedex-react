import classes from './PokemonElement.module.css';

const PokemonElement = ({id, name, type, img}) => {

    const style = `${classes.pokemon} ${classes[`${type}`]}`

    return (<li className={style}>
        <span>{id}</span>
        <img className={classes['pokemon-img']} src={img}/>
        <span>{name.charAt(0).toUpperCase() + name.slice(1)}</span>
        <span>{type.charAt(0).toUpperCase() + type.slice(1)}</span>

    </li>)
}

export default PokemonElement;