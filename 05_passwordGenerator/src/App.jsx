import { useState, useCallback, useEffect, useRef } from "react";

import "./App.css";

function App() {
  //const [count, setCount] = useState(0);

  const [Len, setLen] = useState(8);
  const [addnum, setAddNum] = useState(false);
  const [addChar, setAddChar] = useState(false);
  const [password, setPass] = useState("");

  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (addnum) str += "0123456789";
    if (addChar) str += "!@#$%^&*_+~?";

    for (let i = 1; i <= Len; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }
    setPass(pass);
  }, [Len, addnum, addChar, setPass]);

  const passRef = useRef(null);
  const CopyToClipboard = useCallback(() => {
    passRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    PasswordGenerator();
  }, [Len, addnum, addChar, PasswordGenerator]);

  return (
    <>
      <div className="w-full max-w-2xl mx-auto my-8 px-10 py-8 bg-gray-700 rounded-xl shadow-2xl">
        <h1 className="text-4xl font-bold text-white text-center mb-6">
          Password Generator
        </h1>

        <div className="flex overflow-hidden rounded-lg shadow">
          <input
            type="text"
            value={password}
            readOnly
            placeholder="Password"
            className="w-full px-4 py-3 bg-white outline-none focus:ring-2 focus:ring-blue-400"
            ref={passRef}
          />

          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 shrink-0 transition-colors"
            onClick={CopyToClipboard}
          >
            Copy
          </button>
        </div>
        <div className="flex flex-wrap mt-6 gap-2 text-xl text-amber-200 mx-15">
          <div>
            <input
              type="range"
              value={Len}
              min={6}
              max={50}
              onChange={(e) => {
                setLen(e.target.value);
              }}
            />
            <label className="px-1.5 ">Length: {Len}</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="num"
              defaultChecked={addnum}
              onClick={() => {
                setAddNum((prev) => !prev);
              }}
            />
            <label> Numbers</label>
          </div>

          <div>
            <input
              type="checkbox"
              name="num"
              defaultChecked={addChar}
              onClick={() => {
                setAddChar((prev) => !prev);
              }}
            />
            <label> Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
