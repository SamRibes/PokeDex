import React from 'react';
import { capitalizeFirstLetter } from '../@/lib/utils';
import { Card, CardHeader } from '../@/components/ui/card';
import { PokemonItem } from '../api/types';
import { PokeImage } from '.';
import { useSearchParams } from 'react-router-dom';

interface PokeCardProps {
  pokemon: PokemonItem;
  index: number;
}

const PokeCard = (props: PokeCardProps) => {
  const { pokemon, index } = props;
  const [params, setParams] = useSearchParams();
  const newQueryParameters = new URLSearchParams();

  const getIndex = () => index + 1;

  return (
    <Card
      className="flex flex-col items-center m-5 size-[250px] select-none bg-zinc-200 cursor-pointer hover:bg-slate-500 active:bg-slate-600"
      onClick={() => {
        newQueryParameters.set('pokeId', getIndex().toString());
        setParams(newQueryParameters);
      }}
    >
      <div className="flex flex-col items-center justify-between">
        <CardHeader className="space-y-0.5 py-1">{getIndex()}</CardHeader>
        <CardHeader className="space-y-0.5 pb-1 pt-0">
          {capitalizeFirstLetter(pokemon.name)}
        </CardHeader>
      </div>
      <PokeImage index={getIndex()} alt={pokemon.name} className=" size-36" />
    </Card>
  );
};

export default PokeCard;
