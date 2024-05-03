import { useQuery } from '@tanstack/react-query';
import { Pokemon } from './types';

const baseUrl = 'https://pokeapi.co/api/v2';

export const getPokemonByNameOrId = async (
  nameOrId: string,
): Promise<Pokemon> => {
  return await fetch(`${baseUrl}/pokemon/${nameOrId}`)
    .then((response) => response.json())
    .catch((error) => {
      console.error(error);
    });
};

export const useGetPokemonByNameOrId = (nameOrId: string) => {
  return useQuery({
    queryKey: ['getPokemon', nameOrId],
    queryFn: () => getPokemonByNameOrId(nameOrId),
  });
};
