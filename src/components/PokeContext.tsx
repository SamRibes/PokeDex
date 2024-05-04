import { Dispatch, createContext, useContext } from 'react';
import { PokemonItem } from '../api/types';

export interface PokeContextProps {
  selectedPokemon?: PokemonItem;
  setSelectedPokemon: Dispatch<React.SetStateAction<PokemonItem | undefined>>;
}

export const PokeContext = createContext<PokeContextProps | undefined>(
  undefined,
);

export const usePokeContext = () => {
  const pokeContext = useContext(PokeContext);

  if (pokeContext === undefined) {
    throw new Error(
      'usePokeContext can only be used in a PokeContextProvider tree',
    );
  }

  return pokeContext;
};
