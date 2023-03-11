import { useState } from "react";
import { arr } from "../constant";

export default function Grid({ color }) {
  console.log(color);
  const [active, isActive] = useState(0);

  const [changedColor, setChangedColor] = useState("");

  const [bg, setbg] = useState({});

  const handleChangeColor = (id) => {
    setChangedColor(color);

    setbg({
      ...bg,
      id: {
        //{1:{color:"red"}}
        color: changedColor,
      },
    });

    isActive(id);
  };

  return (
    <div className="flex flex-wrap gap-6 px-12 ">
      {arr.map(({ id }) => (
        <p
          style={
            active == `${id}`
              ? { backgroundColor: `${changedColor}` }
              : { backgroundColor: `${bg[id]?.color}` }
          }
          className={` shadow-xl border border-gray-700 cursor-pointer py-8 px-12`}
          onClick={() => handleChangeColor(id)}
          key={id}
        >
          {id}
        </p>
      ))}
    </div>
  );
}
