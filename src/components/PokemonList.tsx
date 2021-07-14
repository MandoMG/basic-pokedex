import React from 'react'
import { FlatList, View } from 'react-native'
import { PokemonListItem } from '../interfaces'
import PokemonListCardItem from './PokemonListCardItem'

interface PokemonListProps {
  pokemonList?: PokemonListItem[];
  handleOnPress?: (index: number) => void;
}

export default function PokemonList({ pokemonList, handleOnPress }: PokemonListProps) {
  return (
    <FlatList
      data={pokemonList}
      keyExtractor={(item) => item.name}
      renderItem={({ item, index }) => (
        <PokemonListCardItem pokemonListItem={item} pokemonId={index + 1} handleOnPress={handleOnPress} />
      )}
    />
  )
}
