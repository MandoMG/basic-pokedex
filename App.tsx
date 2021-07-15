/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View
} from 'react-native';
import PokemonList from './src/components/PokemonList';
import PokemonDetailCard from './src/components/PokemonDetailCard';
import useMainApp from './src/hooks/useMainApp';

const App = () => {
  const {
    handleOnPokemonItemPress,
    pokemonId,
    pokemonList,
    setShouldShowDetailCard,
    shouldShowDetailCard
  } = useMainApp();

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
