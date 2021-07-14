import React from "react";
import Icon from 'react-native-vector-icons/Feather';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import usePokemonInfo from "../hooks/usePokemonInfo";

const { width, height } = Dimensions.get('screen');

interface PokemonDetailCardProps {
  pokemonId?: number;
  handleOnPress?: () => void;
}

const PokemonDetailCard = ({ pokemonId, handleOnPress }: PokemonDetailCardProps) => {
  const { pokemonData } = usePokemonInfo(pokemonId || 0);
  // TODO: AM - Get correct conversion formulas
  const getHeightInCm = (height: number) => {
    return height * 10;
  };

  const getWeightInKg = (weight: number) => {
    return weight / 10;
  };

  return !!pokemonData ? (
    <View style={styles.container}>
      <View style={styles.card}>
        <TouchableOpacity onPress={handleOnPress} style={styles.closeIcon} >
          <Icon name="x-circle" size={25} />
        </TouchableOpacity>
        <Text style={styles.detailTitle}>{pokemonData.name}</Text>
        <Text>{`ID: ${pokemonData.id}`}</Text>
        {pokemonData.types.map(type => (
          <Text>{type}</Text>
        ))}
        <Text>{`Height: ${getHeightInCm(pokemonData.height)} cm`}</Text>
        <Text>{`Weight: ${getWeightInKg(pokemonData.weight)} kg`}</Text>
      </View>
    </View>
  ) : (<></>)
}

const styles = StyleSheet.create({
  closeIcon: {
    position: 'absolute',
    top: '15%',
    left: '5%'
  },
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
    paddingVertical: 25,
    alignItems: 'center',
    borderRadius: 8
  },
  detailTitle: {
    fontWeight: 'bold',
    fontSize: 25
  }
});

export default PokemonDetailCard;