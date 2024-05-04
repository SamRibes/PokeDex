import React from 'react';
import { usePokeContext } from './PokeContext';

const PokeDetails = () => {
  const { selectedPokemon } = usePokeContext();
  return (
    <div className="p-5 border-2 border-black bg-black">
      <div className="p-5 flex justify-left flex-wrap bg-slate-500 h-full">
        {selectedPokemon?.name}
      </div>
    </div>
  );
};

export default PokeDetails;
