import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Backspace from "../components/backspace";

import Calculator from "../components/calculator";
import Numbers from "../components/numbers";
import Value from "../components/spaceValue";

const Home: NextPage = () => {
  return (
    <div className="w-screen h-screen bg-gray-700 flex flex-1 justify-center items-center">
      <Calculator></Calculator>
    </div>
  );
};

export default Home;
