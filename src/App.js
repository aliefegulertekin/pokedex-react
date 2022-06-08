import React, {useEffect, useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import PokemonList from './components/Pokemons/PokemonList/PokemonList';
import {useGlobalContext} from './context';

function App() {

  const [allPokemons, setAllPokemons] = useState([]);
  const {pokemonList, setPokemonList }= useGlobalContext();

  useEffect(()=>{
    getPokemons();
  }, [])

  

  const getPokemons = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=120');
    const data = await response.json();
    console.log(data);
    data.results.forEach(pokemon => {
      getPokemonDetail(pokemon);
    });
  }

  const getPokemonDetail = async (pokemon) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
    const data = await response.json();
    const pokemonInfo = {
      name: data.name,
      id: data.id,
      img: data.sprites.other['official-artwork'].front_default,
      type:  data.types[0].type.name
    }
    // console.log(pokemonInfo.name);
    setPokemonList(prevState => [...prevState, pokemonInfo]);
    setAllPokemons(prevState => [...prevState, pokemonInfo]);
  } 


  const filteredPokemonHandler = (word) => {
    const filteredPokemon = pokemonList.filter(d => d.name.includes(word))
    setAllPokemons(filteredPokemon);
  }

  const allPokemonHandler = () => {
    setAllPokemons(pokemonList);
  }

  return (
    <div className="App">
      <Header filterPokemon={filteredPokemonHandler}/>
      <button className='all-pokemon-btn' onClick={allPokemonHandler} >All</button>
      <PokemonList pokemon = {allPokemons}/>
    </div>
  );
}

export default App;
