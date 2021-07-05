import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { PokemonData } from '../interfaces'

interface PokemonCardProps {
  pokemonData?: PokemonData;
}

export default function PokemonCard({ pokemonData }: PokemonCardProps) {
  return (
    <View style={styles.topShadow}>
      <View style={styles.bottomShadow}>
        <View style={styles.inner}>
          <Text style={{ color: 'gray', fontSize: 15 }}>{`Pokemon Name: ${pokemonData?.name}`}</Text>
          <Text style={{ color: 'gray', fontSize: 15 }}>{`Pokemon Id: ${pokemonData?.id}`}</Text>
          {!!pokemonData && (
            <Image
              style={{
                height: 100,
                width: 100
              }}
              source={{ uri: pokemonData.sprite }} />
          )}
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
    paddingLeft: 15,
    paddingTop: 10
  },
  topShadow: {
    shadowOffset: {
      width: -6,
      height: -6
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowColor: '#FBFFFF'
  }
});
