import React from 'react';
import { capitalizeFirstLetter } from '../@/lib/utils';
import { Card, CardHeader } from '../@/components/ui/card';
import { usePokeContext } from './PokeContext';
import { PokemonItem } from '../api/types';
import { PokeImage } from '.';

interface PokeCardProps {
  pokemon: PokemonItem;
  index: number;
}

const PokeCard = (props: PokeCardProps) => {
  const { pokemon, index } = props;
  const { setSelectedPokemon } = usePokeContext();
  return (
    <Card
      className="flex flex-col items-center m-5 h-40 w-36 select-none bg-zinc-200 cursor-pointer hover:bg-slate-500 active:bg-slate-600"
      onClick={() => setSelectedPokemon(pokemon.name)}
    >
      <div className="flex flex-col items-center justify-between">
        <CardHeader className="space-y-0.5 py-1">{index + 1}</CardHeader>
        <CardHeader className="space-y-0.5 pb-1 pt-0">
          {capitalizeFirstLetter(pokemon.name)}
        </CardHeader>
      </div>
      <PokeImage index={index + 1} alt={pokemon.name} />
    </Card>
  );
};

export default PokeCard;
