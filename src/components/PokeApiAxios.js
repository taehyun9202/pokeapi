import React, { useState } from 'react';
import axios from 'axios';

const PokeApiAxios = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=807")
        .then(response=>console.log(response))
        .catch(error => console.log(error));
    
    return (
        <div>
            <button type="submit" onClick={PokeApiAxios}>Fetch Pokemon!</button>
        </div>
    );
}

export default PokeApiAxios;

