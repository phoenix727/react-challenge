import { useState, useEffect } from 'react';
import { PokemonClient } from '../clients/pokemon';
import { ClientArgs } from 'pokenode-ts';
import { buildWebStorage } from 'axios-cache-interceptor';

function usePokemonClient(): PokemonClient {
  const clientOptions: ClientArgs = {
    cacheOptions: {
      storage: buildWebStorage(localStorage)
    }
  };
  const [client, setClient] = useState<PokemonClient>(
    new PokemonClient(clientOptions)
  );
  useEffect(() => {
    if (!client) {
      setClient(new PokemonClient(clientOptions));
    }
  }, []);
  return client;
}

export default usePokemonClient;
