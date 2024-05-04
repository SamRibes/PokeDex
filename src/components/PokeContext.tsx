import { Dispatch, createContext, useContext } from 'react';

export interface PokeContextProps {
  selectedPokemon: string | null;
  setSelectedPokemon: Dispatch<React.SetStateAction<string | null>>;
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
