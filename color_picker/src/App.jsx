import { colorPalette } from "./constant";
import Grid from "./components/Grid";
import { useState } from "react";

const App = () => {
  const [colorPic, setColorPic] = useState("");

  const handleColor = (color) => {
    setColorPic(color);
  };

  return (
    <>
      {/*Color Palette Part  */}

      <div className="flex items-center mt-2 justify-center  gap-x-6">
        {colorPalette?.map(({ id, color }) => (
          <p
            key={id}
            onClick={() => handleColor(color)}
            style={{ backgroundColor: `${color}` }}
            className={` p-2  rounded-xl cursor-pointer`}
          >
            {color}
          </p>
        ))}
      </div>

      {/* Grid Part */}
      <div className="mt-10">
        <Grid color={colorPic} />
      </div>
    </>
  );
};

export default App;
