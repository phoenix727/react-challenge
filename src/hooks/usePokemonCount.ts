import { useState, useEffect } from 'react';
import usePokemonClient from './usePokemonClient';

function usePokemonCount(): number {
  const pokemonClient = usePokemonClient();
  const [count, setCount] = useState<number>(0);
  useEffect(() => {
    pokemonClient
      .listPokemons(0, 5)
      .then((res) => {
        setCount(res.count);
      })
      .catch(() => {
        console.error('Failed to fetch pokemon list for total count');
        setCount(0);
      });
  }, []);
  return count;
}

export default usePokemonCount;
