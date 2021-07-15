import Axios from 'axios';
import { useEffect, useState } from "react";
import { PokemonListItem } from '../interfaces/index';

const useMainApp = () => {
  const [pokemonId, setPokemonId] = useState<number>();
  const [pokemonList, setPokemonList] = useState<PokemonListItem[]>();
  const [shouldShowDetailCard, setShouldShowDetailCard] = useState(false);

  const getPokemonList = async () => {
    const response = await Axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
    setPokemonList(response.data.results);
  }

  const handleOnPokemonItemPress = (pokemonIndex: number) => {
    setPokemonId(pokemonIndex);
    setShouldShowDetailCard(true);
  }

  useEffect(() => {
    getPokemonList()
  }, []);

  return {
    handleOnPokemonItemPress,
    pokemonId,
    pokemonList,
    setShouldShowDetailCard,
    shouldShowDetailCard
  }
}

export default useMainApp;