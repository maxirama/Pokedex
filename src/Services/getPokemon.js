import axios from "../axios";

function getPokemon(pokemon) {
  axios
    .get("charmander")
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

export default getPokemon;
