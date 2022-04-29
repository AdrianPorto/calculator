import { count } from "console";
import { off } from "process";
import React from "react";
import { useState } from "react";
import { MdKitchen } from "react-icons/md";

interface Props {
  setValue: (value: number) => void;
  value: number;
}

const SpaceValue: React.FC<Props> = ({ setValue, value }) => {
  return (
    <div>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="  w-full h-14  lg:w-11/12  lg:ml-5   pr-5  text-4xl flex flex-col-reverse  text-right lg:pr-5 pb-4   rounded-xl bg-black text-white  outline-none "
      ></input>
    </div>
  );
};

export default SpaceValue;
