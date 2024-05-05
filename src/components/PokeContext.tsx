import { Dispatch, createContext, useContext } from 'react';

export interface PokeContextProps {
  selectedPokemon?: string;
  setSelectedPokemon: Dispatch<React.SetStateAction<string | undefined>>;
  isDimmed: boolean;
  setIsDimmed: Dispatch<React.SetStateAction<boolean>>;
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
