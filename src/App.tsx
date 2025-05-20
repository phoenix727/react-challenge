import { useCallback, useState } from 'react';
import './App.css';
import PokemonList from 'components/PokemonList';
import Pokemon from 'components/Pokemon';

const App = (): React.ReactNode => {
  const [selectedPokemon, setSelectedPokemon] = useState<number | null>(null);
  const [page, setPage] = useState<number>(0);
  const onPokemonSelect = useCallback((id: number | null) => {
    setSelectedPokemon(id);
  }, []);

  return (
    <>
      {selectedPokemon !== null ? (
        <Pokemon
          selectedPokemon={selectedPokemon}
          resetSelection={() => onPokemonSelect(null)}
        />
      ) : (
        <PokemonList onSelect={onPokemonSelect} />
      )}
    </>
  );
};

export default App;
