import React from "react";

// import { Container } from './styles';
interface Props {
  value: any;
  onClick: any;
  className: string;
}

const Button: React.FC<Props> = ({ onClick, value, className }) => {
  return (
    <div
      onClick={onClick}
      className={`${className} flex items-center justify-center w-sreen h-screnn lg:w-14 lg:h-16 lg:mr-5  w-24 h-20 mr-3 scale-110 rounded-full lg:mt-8 bg-transparenttext-white shadow-gray-400    active:text-orange-500 active:duration-75  active:scale-125 duration-500  active:bg-zinc-900  cursor-pointer text-2xl`}
    >
      <button>{value}</button>
    </div>
  );
};

export default Button;
