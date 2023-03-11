import { createContext, useEffect, useState } from "react";
import Card from "./components/Card";

export const Context = createContext();

const App = () => {
  const [counter, setCounter] = useState(0);
  const [addressData, setAdressData] = useState();

  useEffect(() => {
    async function handleAddressData() {
      const data = await fetch(
        `https://random-data-api.com/api/address/random_address?size=${counter}`
      );
      const json = await data.json();
      setAdressData(json);
      console.log(json);
    }
    handleAddressData();
  }, [counter]);

  const handleInc = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <Context.Provider value={{ addressData }}>
      {/* Button */}
      <div className="flex gap-x-4 mt-2 p-2 items-center">
        <button
          className="bg-blue-200 px-4 py-2 rounded-md"
          onClick={handleInc}
        >
          Click
        </button>

        <p className="text-xl">{counter}</p>
      </div>

      {/* Address Card */}
      <div className="p-2">
        <Card />
      </div>
    </Context.Provider>
  );
};

export default App;
