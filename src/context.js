import React, {useCallback, useContext, useEffect, useState} from "react";

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    
    const [pokemonList, setPokemonList] = useState([]);

 
    // useEffect(()=>{

    //     const fetchData = async ()=>{
    //         try {
    //             const response = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=120');
    
    //             if(!response.ok) {
    //                 throw new Error('Not Found');
    //             }
    
    //             const data = await response.json();
    //             data.results.forEach(pokemon => {
    //                 getPokemonDetail(pokemon);
    //               });
    
    //               const getPokemonDetail = async (pokemon) => {
    //                 const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
    //                 const data = await response.json();
    //                 const pokemonInfo = {
    //                   name: data.name,
    //                   id: data.id,
    //                   img: data.sprites.other['official-artwork'].front_default,
    //                   type:  data.types[0].type.name
    //                 }
    //                 // console.log(pokemonInfo.name);
                
    //                 setAllPokemons(prevState => [...prevState, pokemonInfo]);
    //               } 
    //         }
    //         catch (error) {
    //             console.log(error)
    //         }
    //     }

    //     fetchData();
    // }, [])


    return <AppContext.Provider value={{pokemonList, setPokemonList}}>
        {children}
    </AppContext.Provider>
}


export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider};