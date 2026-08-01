import { useState } from "react";
//import Btn from "./Btn";
//import "./App.css";

function App() {
  //const [count, setCount] = useState(0);

  // here we are creating an bg color changer so we create an use state for an color

  const [color, setColor] = useState("#000");
  return (
    <>
      <div
        className="h-screen  w-full  duration-200 "
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-16 inset-x-12 px-2">
          <div className="fixed flex flex-wrap gap-3 px-3 py-2 rounded-3xl bg-amber-50">
            <button
              onClick={() => {
                setColor("Red");
              }}
              className="outline-none px-4 py-2 rounded-full text-amber-50"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>

            <button
              onClick={() => {
                setColor("pink");
              }}
              className="outline-none px-4 py-2 rounded-full text-amber-50"
              style={{ backgroundColor: "pink" }}
            >
              Pink
            </button>

            <button
              onClick={() => {
                setColor("Yellow");
              }}
              className="outline-none px-4 py-2 rounded-full text-amber-50"
              style={{ backgroundColor: "Yellow" }}
            >
              Yellow
            </button>

            <button
              onClick={() => {
                setColor("cyan");
              }}
              className="outline-none px-4 py-2 rounded-full text-amber-50"
              style={{ backgroundColor: "cyan" }}
            >
              Cyan
            </button>

            <button
              onClick={() => {
                setColor("Purple");
              }}
              className="outline-none px-4 py-2 rounded-full text-amber-50"
              style={{ backgroundColor: "Purple" }}
            >
              Purple
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
