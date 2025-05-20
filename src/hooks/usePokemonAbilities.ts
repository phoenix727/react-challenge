import { useState, useEffect } from 'react';
import { Ability, Pokemon } from 'pokenode-ts';
import { extractIdFromUrl } from 'utils';
import usePokemonClient from './usePokemonClient';

function usePokemonAbilities(pokemon: Pokemon | null): Ability[] | null {
  const pokemonClient = usePokemonClient();
  const [abilities, setAbilities] = useState<Ability[] | null>(null);

  useEffect(() => {
    if (pokemon === null) {
      setAbilities(null);
      return;
    }
    Promise.all(
      pokemon.abilities.map((ability) => {
        const abilityId = extractIdFromUrl(ability.ability.url);
        if (abilityId === null) {
          return Promise.reject();
        } else {
          return pokemonClient.getAbilityById(abilityId);
        }
      })
    )
      .then((abilityRes) => {
        setAbilities(abilityRes);
      })
      .catch(() => {
        console.error('Failed to fetch pokemon abilities');
        setAbilities(null);
      });
  }, [pokemon]);
  return abilities;
}

export default usePokemonAbilities;
