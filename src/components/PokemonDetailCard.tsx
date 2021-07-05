import React from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const { width, height } = Dimensions.get('screen');

const mockPokemonData = {
  name: 'Charmander',
  id: '006',
  type: 'Fire',
  height: 6,
  weight: 85
}

interface PokemonDetailCardProps {
  handleOnPress?: () => void;
}

const PokemonDetailCard = ({ handleOnPress }: PokemonDetailCardProps) => {
  const getHeightInCm = (height: number) => {
    return height * 10;
  };

  const getWeightInKg = (weight: number) => {
    return weight / 10;
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <TouchableOpacity onPress={handleOnPress}>
          <Text>Close</Text>
        </TouchableOpacity>
        <Text style={styles.detailTitle}>{mockPokemonData.name}</Text>
        <Text>{`ID: ${mockPokemonData.id}`}</Text>
        <Text>{mockPokemonData.type}</Text>
        <Text>{`Height: ${getHeightInCm(mockPokemonData.height)} cm`}</Text>
        <Text>{`Weight: ${getWeightInKg(mockPokemonData.weight)} kg`}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 10099,
    height,
    width,
    paddingHorizontal: 20,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)'
  },
  card: {
    width: '100%',
    backgroundColor: 'white',
    paddingVertical: 30,
    alignItems: 'center',
    borderRadius: 8
  },
  detailTitle: {
    fontWeight: 'bold',
    fontSize: 25
  }
});

export default PokemonDetailCard;