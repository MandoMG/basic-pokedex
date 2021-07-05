import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { PokemonListItem } from '../interfaces'

interface PokemonListCardItemProps {
  pokemonListItem?: PokemonListItem;
  handleOnPress?: () => void;
}

export default function PokemonListCardItem({ pokemonListItem, handleOnPress }: PokemonListCardItemProps) {
  const formatName = (name: string = '') => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  return (
    <View style={{ margin: 12 }}>
      <View style={styles.topShadow}>
        <View style={styles.bottomShadow}>
          <TouchableOpacity style={styles.inner} onPress={handleOnPress}>
            <Text style={{ color: 'gray', fontSize: 15 }}>{`${formatName(pokemonListItem?.name)}`}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  bottomShadow: {
    shadowOffset: {
      width: 6,
      height: 6
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowColor: '#B7C4DD'
  },
  inner: {
    alignItems: 'flex-start',
    backgroundColor: '#DEE9F7',
    borderColor: '#E2ECFD',
    borderRadius: 15,
    borderWidth: 1,
    justifyContent: 'center',
    padding: 15
  },
  topShadow: {
    shadowOffset: {
      width: -9,
      height: -6
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowColor: '#FBFFFF'
  }
});

