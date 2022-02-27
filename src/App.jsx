import { useEffect, useState } from "react";
import axios, { Axios } from "axios";
import getPokemon from "./Services/getPokemon";

function App() {
  const [pokemon, setPokemon] = useState({});

  const API_URL = "https://pokeapi.co/api/v2/pokemon/";

  console.log(getPokemon("charmander"));

  return <div className="App">{"Hola Mundo"}</div>;
}

export default App;
