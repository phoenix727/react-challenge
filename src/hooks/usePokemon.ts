import { useState, useEffect } from 'react';
import { Pokemon } from 'pokenode-ts';
import usePokemonClient from './usePokemonClient';

function usePokemon(id: number): Pokemon | null {
  const pokemonClient = usePokemonClient();
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  useEffect(() => {
    pokemonClient
      .getPokemonById(id)
      .then((res) => {
        setPokemon(res);
      })
      .catch(() => {
        console.error('Failed to fetch pokemon');
        setPokemon(null);
      });
  }, [id]);
  return pokemon;
}

export default usePokemon;
