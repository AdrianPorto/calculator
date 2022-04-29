import React, { useState } from "react";
import { MdKeyboardBackspace } from "react-icons/md";

const Backspace: React.FC = ({}) => {
  return (
    <div className="flex items-center justify-center w-20 h-20 border border-gray-400 shadow-md mr-10 shadow-gray-400 rounded-lg cursor-pointer">
      <MdKeyboardBackspace className="h-6 w-10"></MdKeyboardBackspace>
    </div>
  );
};

export default Backspace;
