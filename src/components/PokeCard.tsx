import React from 'react';
import {
  Card,
  CardHeader,
} from '../@/components/ui/card';

interface PokeCardProps {
  pokemon: {
    name: string;
    url: string;
  };
  index: number;
}

const PokeCard = (
  props: PokeCardProps,
) => {
  const { pokemon, index } = props;
  return (
    <Card className="flex flex-col items-center m-5 h-40 w-36 select-none bg-zinc-200 cursor-pointer hover:bg-slate-500 active:bg-slate-600">
      <div className="flex flex-col items-center justify-between">
        <CardHeader className="space-y-0.5 py-1">
          {index + 1}
        </CardHeader>
        <CardHeader className="space-y-0.5 pb-1 pt-0">
          {pokemon.name}
        </CardHeader>
      </div>
      <img
        src={`/sprites/${index + 1}.png`}
        alt={pokemon.name}
      />
    </Card>
  );
};

export default PokeCard;
