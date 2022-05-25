import classes from './Header.module.css';
import HeaderForm from './HeaderForm';

const Header = props => {

    return (<div className={classes.header}>
        <h1>Pokemon List</h1>
        <HeaderForm filterPokemon = {props.filterPokemon}/>
    </div>)
}

export default Header;