import { useState } from "react";

function App() {
  //always this should be let not an constant
  let [counter, setCounter] = useState(15);

  //to add an value in counter
  const addcounter = () => {
    console.log("button cliked", counter);
    //counter = counter + 1;
    setCounter(counter + 1);
  };

  //to remove an value from counter
  const removecounter = () => {
    //console.log("button cliked", counter);
    counter = counter - 1;
    if (counter < 0) {
      counter = 0;
    }
    setCounter(counter);
  };

  return (
    <>
      <h1>Mangesh </h1>
      <h2>counter value : {counter} </h2>
      <button onClick={addcounter}>Add Value</button> &nbsp;
      <button onClick={removecounter}>Remove Value</button>
    </>
  );
}

export default App;
