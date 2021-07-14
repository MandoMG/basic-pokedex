/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Axios from 'axios';
import { PokemonData, PokemonListItem } from './src/interfaces';
import PokemonCard from './src/components/PokemonCard';
import PokemonList from './src/components/PokemonList';
import PokemonDetailCard from './src/components/PokemonDetailCard';

const App = () => {
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

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ alignSelf: 'stretch' }}>
        <View style={{ margin: 20 }}>
          <PokemonList pokemonList={pokemonList} handleOnPress={handleOnPokemonItemPress} />
        </View>
        {shouldShowDetailCard && (
          <PokemonDetailCard handleOnPress={() => setShouldShowDetailCard(false)} pokemonId={pokemonId} />
        )}
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEE9FD',
    alignItems: 'center'
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});

export default App;
