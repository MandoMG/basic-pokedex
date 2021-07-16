import React from "react";
import { Text, View } from "react-native";
import TypeColors from "../constants/TypeColors";
import TextFormatter from "../util/TextFormatter";
import styles from "./styles/PokemonTypeStyles";

interface PokemonTypeComponentProps {
  type: string;
}

const PokemonTypeComponent = ({ type }: PokemonTypeComponentProps) => {

  const typeColors = new TypeColors();

  const getPokemonTypeColor = () => {
    return { backgroundColor: typeColors.getTypeColor(type) };
  }

  return (
    <View style={styles.wrapper}>
      <View style={[styles.container, getPokemonTypeColor()]}>
        <Text style={{ color: 'white' }}>{TextFormatter.capitalizeText(type)}</Text>
      </View>
    </View>
  );
}

export default PokemonTypeComponent;