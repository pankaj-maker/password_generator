import { useState, useCallback,useEffect } from "react";

function App() {
  const [length, setLength] = useState(6);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [input, setInput] = useState("");

  const passwordGenerator = useCallback(() => {
    let password = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) {
      str += "0123456789";
    }
    if (character) {
      str += "!@#$%^&*()_+-=[]{}|;':,./<>?";
    }
    for (let i = 1; i < length; i++) {
      password += str[Math.floor(Math.random() * str.length)];
    }
    setInput(password);
  }, [length, number, character]);

useEffect(() => {
  passwordGenerator();
}, [passwordGenerator, length, number, character]);

  const handleLengthChange = (e) => {
    setLength(e.target.value);
  };

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-slate-600 text-black ">
      <h1 className="text-4xl text-center ">Password generator</h1>
      <div className="flex shadow rounded-lg mb-4 overflow-hidden mt-3">
        <input
          type="text"
          value={input}
          placeholder="password"
          className="outline-none w-full py-1 px-3"
        />
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={20}
            value={length}
            onChange={handleLengthChange}
            className="cursor-pointer"
          />
          <label>Lenght: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            checked={number}
            onChange={() => setNumber(!number)}
            className="cursor-pointer"
          />
          <label>Numbers</label>
        </div>
        <div>
          <input
            type="checkbox"
            checked={character}
            onChange={() => setCharacter(!character)}
            className="cursor-pointer"
          />
          <label>Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
