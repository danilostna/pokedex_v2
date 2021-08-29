import axios from "@/axios";

const getPokemons = ({limit = 25, offset = 0}) => axios.get(`/pokemon?limit=${limit}&offset=${offset}`);
const getPokemonByName = nome => axios.get(`/pokemon/${nome}`);

export default {
  getPokemons,
  getPokemonByName,
};
