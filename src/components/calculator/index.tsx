import { count } from "console";
import React, { Children, useState } from "react";
import { isNumberObject } from "util/types";

import Button from "../button";

import Numbers from "../numbers";
import SpaceValue from "../spaceValue";

const Calculator: React.FC = ({}) => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState<number>(0);
  const [operators, setOperators] = useState<number>(0);
  const [oldValue, setOldValue] = useState(0);
  const [newValue, setNewValue] = useState(0);
  const [lastNumber, setLastNumber] = useState(0);
  const [valueAux, setValueAux] = useState(0);
  const [confirm, setConfirm] = useState(false);
  const [operatorsSimbol, setOperatorsSimbol] = useState("");
  const [show, setShow] = useState(false);
  const [showTwo, setShowTwo] = useState(false);
  const [showThree, setShowThree] = useState(false);
  const [showValue, setShowValue] = useState(false);
  const [showFour, setShowFour] = useState(false);
  const [verify, setVerify] = useState(false);
  const [quant, setQuant] = useState(0);

  return (
    <div className="lg:w-full lg:h-3/4 flex  justify-center">
      <div className="  h-screen w-screen   lg:h-full  lg:rounded-3xl flex flex-col  lg:pt-10 lg:w-1/4 bg-gray-900 shadow-xl  text-white ">
        <div className="bg-black lg:w-11/12 h-24  w-full lg:rounded-xl text-right  lg:-my-4 lg:text-xl lg:ml-5 pr-5 ">
          <div className="h-40 pt-16 lg:pt-10">
            {showValue && value}
            {show && oldValue} {showTwo && operatorsSimbol} {showThree && value}
            {showFour && newValue}
          </div>
        </div>
        <SpaceValue setValue={setValue} value={value}></SpaceValue>
        <Numbers
          show={show}
          showTwo={showTwo}
          showThree={showThree}
          showValue={showValue}
          showFour={showFour}
          setShowValue={setShowValue}
          setShow={setShow}
          setShowTwo={setShowTwo}
          setShowThree={setShowThree}
          setShowFour={setShowFour}
          newValue={newValue}
          setNewValue={setNewValue}
          operatorsSimbol={operatorsSimbol}
          setOperatorsSimbol={setOperatorsSimbol}
          confirm={confirm}
          setConfirm={setConfirm}
          valueAux={valueAux}
          setValueAux={setValueAux}
          lastNumber={lastNumber}
          setLastNumber={setLastNumber}
          value={value}
          setValue={setValue}
          oldValue={oldValue}
          setOldValue={setOldValue}
          count={count}
          setCount={setCount}
          operators={operators}
          setOperators={setOperators}
          verify={verify}
          setVerify={setVerify}
          quant={quant}
          setQuant={setQuant}
        />
      </div>
    </div>
  );
};
export default Calculator;
