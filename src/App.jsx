import { useState, useCallback, useEffect } from "react";

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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="w-full max-w-md mx-auto shadow-2xl rounded-xl px-6 py-8 bg-white/90 backdrop-blur-md text-gray-800">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Password Generator
        </h1>
        <div className="flex items-center shadow-sm rounded-lg mb-6 overflow-hidden bg-white/80">
          <input
            type="text"
            value={input}
            placeholder="Generated Password"
            readOnly
            className="outline-none w-full py-2 px-4 text-gray-700 font-medium bg-transparent"
          />
        </div>
        <div className="space-y-4">
          {/* Length Range */}
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-700">Length: {length}</label>
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              onChange={handleLengthChange}
              className="cursor-pointer accent-purple-500"
            />
          </div>

          {/* Numbers Checkbox */}
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={number}
              onChange={() => setNumber(!number)}
              className="w-5 h-5 cursor-pointer accent-indigo-500"
            />
            <label className="text-gray-700 font-medium">Include Numbers</label>
          </div>

          {/* Characters Checkbox */}
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={character}
              onChange={() => setCharacter(!character)}
              className="w-5 h-5 cursor-pointer accent-pink-500"
            />
            <label className="text-gray-700 font-medium">
              Include Special Characters
            </label>
          </div>
        </div>

        {/* Generate Password Button */}
        <button
          onClick={passwordGenerator}
          className="w-full mt-6 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-md transition-all duration-200"
        >
          Generate Password
        </button>
      </div>
    </div>
  );
}

export default App;
