import { useEffect, useState } from 'react';
import Axios from 'axios';

interface PokemonData {
  id: number;
  name: string;
};

const usePokemonInfo = () => {
  const [pokemonData, setPokemonData] = useState<PokemonData>();

  const fetchPokemonData = async (id: string) => {
    if (!id) {
      return undefined;
    }

    const response = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    const pokemonResponse = {
      id: response.data.id,
      name: response.data.name
    }
    setPokemonData(pokemonResponse);
  };

  return {
    pokemonData,
    fetchPokemonData
  }
};

export default usePokemonInfo;