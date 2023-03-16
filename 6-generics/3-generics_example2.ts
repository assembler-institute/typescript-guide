import axios from 'axios';
import { Pokemon } from './interfaces';
// now we can use a more complex example using a http request, to the pokeapi API

// look if we use async keyword , and hover over the getPokemon function, we can see that the return type is Promise<any>
const getPokemon = async (pokemonID: number) => {
  // look what happens when we hover over the axios.get()
  const { data } = await axios.get<Pokemon>(
    `https://pokeapi.co/api/v2/pokemon/${pokemonID}`
  );
  // look what happens when we hover over the data variable, how typescript knows the type of the data that we are returning
  // after .get() method we define the type of the data that we are expecting
  return data;
};

const getPokemonByID = (name: string): Promise<Pokemon> => {
  return axios
    .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((response) => response.data as Pokemon);
};

// when we use the async keyword, typescript let us use .then() and .catch() methods
getPokemonByID('pikachu')
  .then((data) => console.log(data.base_experience))
  .catch((err) => console.log(err));

getPokemon(1)
  //   .then((data) => console.log(data.abilities[0].ability.name))
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// how to type a complex response?
// we can use the site https://app.quicktype.io/ to generate the types for us
// we set in the left side bar Source Type to JSON, Name: the name of the interface, and in the right side bar language to TypeScript,
// and select the option Interfaces only

// we also use the plugin https://marketplace.visualstudio.com/items?itemName=quicktype.quicktype to generate the types for us
// 1- we copy the json that we want to generate the types
// 2- open the file that we want to define the interfaces
// 3- we can use the shortcut ctrl + shift + p and type paste JSON as code
// 4- type the top level interface name (Pokemon in this case)
