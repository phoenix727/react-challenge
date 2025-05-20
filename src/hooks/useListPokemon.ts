import { useState, useEffect } from 'react';
import { extractIdFromUrl } from 'utils';
import usePokemonClient from './usePokemonClient';

function useListPokemon(
  page: number,
  limit: number
): { name: string; id: number }[] {
  const pokemonClient = usePokemonClient();
  const [pokemonList, setPokemonList] = useState<
    { name: string; id: number }[]
  >([]);
  useEffect(() => {
    pokemonClient
      .listPokemons(page * limit, limit)
      .then((res) => {
        setPokemonList(
          res.results.map((pokemon) => ({
            name: pokemon.name,
            id: extractIdFromUrl(pokemon.url) || 0
          }))
        );
      })
      .catch(() => {});
  }, [page, limit]);
  return pokemonList;
}

export default useListPokemon;
