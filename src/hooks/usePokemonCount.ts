import { useState, useEffect } from 'react';
import usePokemonClient from './usePokemonClient';

function usePokemonCount(): number {
  const pokemonClient = usePokemonClient();
  const [count, setCount] = useState<number>(0);
  useEffect(() => {
    pokemonClient.listPokemons(0, 5).then((res) => {
      setCount(res.count);
    });
  }, []);
  return count;
}

export default usePokemonCount;
