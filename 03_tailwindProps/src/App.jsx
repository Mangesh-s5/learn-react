import { useState } from "react";
import Cards from "./Components/cards";
function App() {
  const [count, setCount] = useState(0);

  const myObj = {
    name: "mangesh",
    age: 20,
  };

  return (
    <>
      <h1 className="bg-sky-500 text-black rounded-xl mb-4">
        Radha rani ki jay
      </h1>
      <Cards user={myObj} />
    </>
  );
}

export default App;
