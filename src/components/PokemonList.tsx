import React from 'react'
import { FlatList, View } from 'react-native'
import { PokemonListItem } from '../interfaces'
import PokemonListCardItem from './PokemonListCardItem'

interface PokemonListProps {
  pokemonList?: PokemonListItem[];
  handleOnPress?: () => void;
}

export default function PokemonList({ pokemonList, handleOnPress }: PokemonListProps) {
  return (
    <FlatList
      data={pokemonList}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => (
        <PokemonListCardItem pokemonListItem={item} handleOnPress={handleOnPress} />
      )}
    />
  )
}
