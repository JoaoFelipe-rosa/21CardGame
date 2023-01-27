/* eslint-disable no-console */
/* eslint-disable max-len */
import React, { useState } from 'react';
import './styleBody.css';

export default function Game() {
  const [mode, setMode] = useState('HOME');
  const RenderMode = MODES[mode] || (() => (
    <div className="flex flex-col items-center">
      <h1 className="text_main">ERROR</h1>
      <h3 className="text_main">Please, restart the game</h3>
      <button type="button" className="p-2 w-1/3 rounded transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-slate-200 duration-300" onClick={() => setMode('HOME')}>Restart</button>
    </div>
  )
  );
  return (
    <div className="flex flex-col p-8 rounded flex ">
      <RenderMode setMode={setMode} />
    </div>
  );
}
