import React from 'react';
import { Card, CardHeader } from '../@/components/ui/card';

interface PokeCardProps {
  pokemon: {
    name: string;
    url: string;
  };
  index: number;
}

const PokeCard = (props: PokeCardProps) => {
  const { pokemon, index } = props;
  return (
    <Card className="m-5 h-40 w-40 flex flex-col items-center bg-zinc-200">
      <CardHeader className="space-y-0.5 pb-2">{pokemon.name}</CardHeader>
      <img src={`/sprites/${index + 1}.png`} alt={pokemon.name} />
    </Card>
  );
};

export default PokeCard;
