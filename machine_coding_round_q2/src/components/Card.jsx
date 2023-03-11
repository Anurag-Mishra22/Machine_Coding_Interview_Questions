import React from "react";
import { useContext } from "react";
import { Context } from "../App";

export default function Card() {
  const { addressData } = useContext(Context);

  return (
    <div className="grid grid-cols-4 gap-4 mt-4">
      {addressData?.map(({ street_address, street_name, city, state, id }) => (
        <div
          key={id}
          className="bg-[#91e2ff] shadow-xl p-4 rounded-md space-y-4 "
        >
          <p className=" text-sm md:text-lg font-semibold">
            Street Address:
            <span className="font-normal ml-2">{street_address}</span>
          </p>
          <p className=" text-sm md:text-lg font-semibold">
            Street Name:<span className="ml-2 font-normal">{street_name}</span>
          </p>
          <p className=" text-sm md:text-lg font-semibold">
            City:<span className="ml-2 font-normal">{city}</span>
          </p>
          <p className=" text-sm md:text-lg font-semibold">
            State:<span className="ml-2 font-normal">{state}</span>
          </p>
        </div>
      ))}
    </div>
  );
}
