import React from 'react';
import logo from './logo.svg';
import './App.css';
import PokeApi from './components/PokeApi'
import PokeApiAxios from './components/PokeApiAxios'

function App() {
  return (
    <div className="App">
      {/* <PokeApi/> */}
      <PokeApiAxios/>
    </div>
  );
}

export default App;
