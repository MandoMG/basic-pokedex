import React from "react";
import Icon from 'react-native-vector-icons/Feather';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import usePokemonInfo from "../hooks/usePokemonInfo";
import PokemonTypeComponent from "./PokemonType";
import TextFormatter from "../util/TextFormatter";

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
        <Text style={styles.detailTitle}>{TextFormatter.capitalizeText(pokemonData.name)}</Text>
        <View style={{ flexDirection: 'row' }}>
          {pokemonData.types.map(type => (
            <PokemonTypeComponent type={type} />
          ))}
        </View>
        <View style={{ flexDirection: 'row', paddingHorizontal: 40, paddingTop: 10 }}>
          <View style={{ flex: 1, alignSelf: 'center' }}>
            <Text>{`ID: ${pokemonData.id}`}</Text>
            <Text>{`Height: ${getHeightInCm(pokemonData.height)} cm`}</Text>
            <Text>{`Weight: ${getWeightInKg(pokemonData.weight)} kg`}</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Image source={{ uri: pokemonData.imageUri }} style={{ height: 150, width: 150 }}></Image>
          </View>
        </View>
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