import React, {useState} from 'react';
import classes from './HeaderForm.module.css';

const HeaderForm = props => {

    const [pokemonWord, setPokemonWord] = useState('');

    const pokemonSearchHandler = (e) => {
        e.preventDefault();
        if(pokemonWord.length <= 0) {
            return;
        }
        props.filterPokemon(pokemonWord);
        setPokemonWord('');
    };

    const inputChangeHandler = (e) => {
        setPokemonWord(e.target.value);
    }

    return (<form className={classes.form} onSubmit={pokemonSearchHandler}>
        <input value={pokemonWord} onChange={inputChangeHandler}/>
        <button type='submit' >Search</button>
    </form>)
}

export default HeaderForm;