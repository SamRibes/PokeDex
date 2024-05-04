import React, { useState } from 'react';
import { PokeDetails, PokeList } from './components';
import { getStorageIsDimmed, setStorageIsDimmed } from './@/lib/utils';
import { Switch } from './@/components/ui/switch';

const App = () => {
  const [isDimmed, setIsDimmed] = useState(getStorageIsDimmed());

  return (
    <div>
      <Switch
        className=""
        checked={isDimmed}
        onCheckedChange={() => {
          setStorageIsDimmed(!isDimmed);
          setIsDimmed(!isDimmed);
        }}
      />
      <div
        className={`h-screen p-4 ${isDimmed ? 'bg-slate-800' : 'bg-zinc-300'} flex justify-center items-center`}
      >
        <div className="h-[90%] w-[85%] p-10 rounded-l-lg border-2 border-black bg-red-400">
          <div className="h-full w-full grid grid-cols-[1fr,1rem,1fr]">
            <PokeList />
            <div className="w-5"></div>
            <PokeDetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
