import React, {useEffect, useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import PokemonList from './components/Pokemons/PokemonList/PokemonList';

function App() {

  const [allPokemons, setAllPokemons] = useState([])

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

    setAllPokemons(prevState => [...prevState, pokemonInfo]);
  } 


  const filteredPokemonHandler = (word) => {
    const filteredPokemon = allPokemons.filter(d => d.name.includes(word))
    setAllPokemons(filteredPokemon);
  }

  return (
    <div className="App">
      <Header filterPokemon={filteredPokemonHandler}/>
      <PokemonList pokemons={allPokemons}/>
    </div>
  );
}

export default App;
