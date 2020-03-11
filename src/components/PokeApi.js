import React, { useState } from 'react';


const PokeApi = () => {
    const [pokemon, setPokemon] = useState([]);
 
    const getPokemon = event => {
        fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=807")
            .then(response => response.json())
            .then(response => setPokemon(response.results))
            .catch(error =>{console.log(error)})
    }

    // const createFetch = () =>{
    //     setState([...pokemon]);
    // }
 
    return (
        <div>
            <button type="submit" onClick={getPokemon}>Fetch Pokemon!</button>
            {pokemon.map((pokemon, i)=>
                <li key={i}>{pokemon.name}</li>
            )}
        </div>
    )
}




export default PokeApi