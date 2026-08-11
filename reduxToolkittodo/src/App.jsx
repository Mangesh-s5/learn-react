import { useState } from "react";

import "./App.css";
import Addtodo from "./Componets/Addtodo";
import Todos from "./Componets/Todos";

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col items-center pt-16 px-4 font-sans">
      <div className="w-full max-w-xl bg-zinc-900 p-8 rounded-2xl border border-zinc-800 shadow-2xl">
        <h1 className="text-3xl font-bold text-center mb-8 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
          Redux Toolkit Todo App
        </h1>
        <Addtodo />
        <div className="mt-6">
          <Todos />
        </div>
      </div>
    </div>
  );
}

export default App;
