import React, { useState } from 'react';
import { PokeDetails, PokeList } from './components';
import { getStorageIsDimmed, setStorageIsDimmed } from './@/lib/utils';
import { Switch } from './@/components/ui/switch';
import { PokeContext, PokeContextProps } from './components/PokeContext';

const App = () => {
  const [isDimmed, setIsDimmed] = useState(getStorageIsDimmed());
  const [selectedPokemon, setSelectedPokemon] = useState<string | undefined>(
    undefined,
  );

  const pokeContextValue: PokeContextProps = {
    selectedPokemon,
    setSelectedPokemon,
  };

  return (
    <div
      className={`h-screen p-4 ${isDimmed ? 'bg-slate-800' : 'bg-zinc-300'} flex justify-center items-center`}
    >
      <Switch
        checked={isDimmed}
        onCheckedChange={() => {
          setStorageIsDimmed(!isDimmed);
          setIsDimmed(!isDimmed);
        }}
      />
      <div className="h-[90%] w-[85%] p-10 rounded-l-lg border-2 border-black bg-red-400">
        <PokeContext.Provider value={pokeContextValue}>
          <div className="h-full w-full grid grid-cols-[1fr,1rem,1fr]">
            <PokeList />
            <div className="w-5" />
            <PokeDetails />
          </div>
        </PokeContext.Provider>
      </div>
    </div>
  );
};

export default App;
