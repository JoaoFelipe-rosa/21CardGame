import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Link to="/Gaming"><button className="p-2 w-full rounded transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-slate-200 duration-300" type="button">START THE MAGIC!!</button></Link>
    </div>
  );
}
