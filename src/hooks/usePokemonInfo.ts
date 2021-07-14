import { useEffect, useState } from 'react';
import Axios from 'axios';

interface PokemonData {
  id: number;
  description: string;
  height: number;
  name: string;
  weight: number;
  types: string[];
};

interface PokemonTypeDetailData {
  name: string;
  url: string;
}

interface TypeData {
  slot: number;
  type: PokemonTypeDetailData
}

const usePokemonInfo = (id: number) => {
  const [pokemonData, setPokemonData] = useState<PokemonData>();

  const getTypes = (typeDataList: TypeData[]): string[] => {
    return typeDataList.map((typeData: TypeData) => typeData.type.name)
  }

  const fetchPokemonData = async () => {
    if (!id) {
      return undefined;
    }

    const pokemonInfoResponse = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    const pokemonSpeciesResponse = await Axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}/`);
    const pokemonDescription = pokemonSpeciesResponse.data.flavor_text_entries.filter((flavor: any) => flavor.version.name === "red");
    const pokemonTypes = getTypes(pokemonInfoResponse.data.types);

    const pokemonResponse = {
      id: pokemonInfoResponse.data.id,
      description: pokemonDescription.flavor_text,
      height: pokemonInfoResponse.data.height,
      name: pokemonInfoResponse.data.name,
      weight: pokemonInfoResponse.data.weight,
      types: pokemonTypes
    }
    setPokemonData(pokemonResponse);
  };

  useEffect(() => {
    (async () => await fetchPokemonData())()
  }, []);

  return {
    pokemonData
  }
};

export default usePokemonInfo;