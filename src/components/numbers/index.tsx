import { stringify } from "querystring";
import React, { useState } from "react";
import { RiDivideFill } from "react-icons/ri";
import Button from "../button";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
const NumbersArray: number[] = [];

interface Props {
  setCount: (value: number) => void;
  setValue: (value: number) => void;
  setOperators: (value: number) => void;
  setOldValue: (value: number) => void;
  setLastNumber: (value: number) => void;
  setValueAux: (value: number) => void;
  setConfirm: (value: boolean) => void;
  setOperatorsSimbol: (value: string) => void;
  setNewValue: (value: number) => void;
  setShow: (value: boolean) => void;
  setShowTwo: (value: boolean) => void;
  setShowThree: (value: boolean) => void;
  setShowValue: (value: boolean) => void;
  setShowFour: (value: boolean) => void;
  setVerify: (value: boolean) => void;
  setQuant: (value: number) => void;

  show: boolean;
  showTwo: boolean;
  showThree: boolean;
  showValue: boolean;
  showFour: boolean;
  newValue: number;
  operatorsSimbol: string;
  confirm: boolean;
  valueAux: number;
  lastNumber: number;
  oldValue: number;
  operators: number;
  value: number;
  count: number;
  verify: boolean;
  quant: number;
}

const Numbers: React.FC<Props> = ({
  setCount,
  setOperatorsSimbol,
  setNewValue,
  setShow,
  setShowTwo,
  setShowThree,
  setShowFour,
  show,
  showTwo,
  showThree,
  showValue,
  showFour,
  setShowValue,
  newValue,
  operatorsSimbol,
  setConfirm,
  confirm,
  setValue,
  setValueAux,
  valueAux,
  setLastNumber,
  lastNumber,
  count,
  value,
  operators,
  setOperators,
  verify,
  setVerify,
  setOldValue,
  oldValue,
  quant,
  setQuant,
}) => {
  return (
    <div className="  w-full items-center lg:rounded-3xl h-full lg:flex lg:flex-col bg-gray-900 mt-24 lg:mt-0 ">
      <div className="lg:flex lg:flex-row">
        <div className="flex flex-1 lg:flex  lg:w-96 lg:h-80 lg:-mr-20 lg:mt-20 ">
          <div className="lg:flex flex-col lg:h-32 lg:flex-col ml-8  lg:ml-8">
            <Button
              className="lg:mr-10 text-5xl"
              value={7}
              onClick={() => {
                if (quant < 15) {
                  setQuant(quant + 1);
                  setCount(count + 1);
                  setConfirm(false);
                  setLastNumber(7);
                  if (operators > 0) {
                    setVerify(true);
                  }

                  if (showTwo == true) {
                    setShowThree(true);
                  } else {
                    setShowValue(true);
                  }

                  if (count >= 0) {
                    setValue(value * 10 + 7);
                  }

                  setValueAux(7 / 10);
                  if (count > 0) {
                    NumbersArray[count] = lastNumber;
                  }
                }
              }}
            />
            <Button
              className="lg:mr-10 lg:mt-9  text-5xl "
              value={4}
              onClick={() => {
                if (quant < 15) {
                  setQuant(quant + 1);
                  setCount(count + 1);
                  setConfirm(false);
                  setLastNumber(4);
                  if (operators > 0) {
                    setVerify(true);
                  }
                  if (showTwo == true) {
                    setShowThree(true);
                  } else {
                    setShowValue(true);
                  }
                  if (count >= 0) {
                    setValue(value * 10 + 4);
                  }
                  setValueAux(4 / 10);
                  if (count > 0) {
                    NumbersArray[count] = lastNumber;
                  }
                }
              }}
            />{" "}
            <Button
              className="lg:mr-10 lg:mt-9  text-5xl  "
              value={1}
              onClick={() => {
                if (quant < 15) {
                  setQuant(quant + 1);
                  setCount(count + 1);
                  setConfirm(false);
                  setLastNumber(1);
                  if (operators > 0) {
                    setVerify(true);
                  }
                  if (showTwo == true) {
                    setShowThree(true);
                  } else {
                    setShowValue(true);
                  }
                  if (count >= 0) {
                    setValue(value * 10 + 1);
                  }
                  setValueAux(1 / 10);
                  if (count > 0) {
                    NumbersArray[count] = lastNumber;
                  }
                }
              }}
            />
            <Button
              className=" rounded-full text-blue-800  font-black  lg:mr-10 text-5xl  lg:mt-9  "
              value={"CE"}
              onClick={() => {
                setCount((count = 0));
                setValue((value = 0));
                setOldValue((oldValue = 0));
                setNewValue((newValue = 0));
                setConfirm(false);
                setShow(false);
                setShowValue(false);
                setShowTwo(false);
                setShowThree(false);
                setShowFour(false);
                setVerify(false);
                setOperators(0);
                setQuant(0);
                NumbersArray.length = 0;
              }}
            />
          </div>

          <div className="lg:flex flex-col lg:h-16 lg:justify-items-center ">
            <Button
              className="lg:mr-10 text-5xl   "
              value={8}
              onClick={() => {
                if (quant < 15) {
                  setQuant(quant + 1);
                  setCount(count + 1);
                  setConfirm(false);
                  setLastNumber(8);
                  if (operators > 0) {
                    setVerify(true);
                  }
                  if (showTwo == true) {
                    setShowThree(true);
                  } else {
                    setShowValue(true);
                  }
                  if (count >= 0) {
                    setValue(value * 10 + 8);
                  }
                  setValueAux(8 / 10);
                  if (count > 0) {
                    NumbersArray[count] = lastNumber;
                  }
                }
              }}
            />

            <Button
              className="lg:mr-10 text-5xl lg:mt-9 "
              value={5}
              onClick={() => {
                if (quant < 15) {
                  setQuant(quant + 1);
                  setCount(count + 1);
                  setConfirm(false);
                  setLastNumber(5);
                  if (operators > 0) {
                    setVerify(true);
                  }
                  if (showTwo == true) {
                    setShowThree(true);
                  } else {
                    setShowValue(true);
                  }
                  if (count >= 0) {
                    setValue(value * 10 + 5);
                  }
                  setValueAux(5 / 10);
                  if (count > 0) {
                    NumbersArray[count] = lastNumber;
                  }
                }
              }}
            />
            <Button
              className="lg:mr-10 text-5xl lg:mt-9   "
              value={2}
              onClick={() => {
                if (quant < 15) {
                  setQuant(quant + 1);
                  setCount(count + 1);
                  setConfirm(false);
                  setLastNumber(2);
                  if (operators > 0) {
                    setVerify(true);
                  }
                  if (showTwo == true) {
                    setShowThree(true);
                  } else {
                    setShowValue(true);
                  }
                  if (count >= 0) {
                    setValue(value * 10 + 2);
                  }
                  setValueAux(2 / 10);
                  if (count > 0) {
                    NumbersArray[count] = lastNumber;
                  }
                }
              }}
            />

            <Button
              className="  lg:mr-6  text-5xl "
              value={0}
              onClick={() => {
                if (value > 0) {
                  if (quant < 15) {
                    setQuant(quant + 1);
                    setCount(count + 1);
                    setLastNumber(0);
                    if (operators > 0) {
                      setVerify(true);
                    }
                    if (count >= 0) {
                      setValue(value * 10);
                    }

                    if (count > 0) {
                      NumbersArray[count] = lastNumber;
                    }
                  }
                }
              }}
            />
          </div>
          <div className="lg:flex flex-col lg:h-16 lg:justify-items-center ">
            <Button
              className="lg:mr-10  text-5xl "
              value={9}
              onClick={() => {
                if (quant < 15) {
                  setQuant(quant + 1);
                  setCount(count + 1);
                  setConfirm(false);
                  setLastNumber(9);
                  if (operators > 0) {
                    setVerify(true);
                  }
                  if (showTwo == true) {
                    setShowThree(true);
                  } else {
                    setShowValue(true);
                  }

                  if (count >= 0) {
                    setValue(value * 10 + 9);
                  }
                  setValueAux(9 / 10);
                  if (count > 0) {
                    NumbersArray[count] = lastNumber;
                  }
                }
              }}
            />
            <Button
              className="lg:mr-10  text-5xl lg:mt-9"
              value={6}
              onClick={() => {
                if (quant < 15) {
                  setQuant(quant + 1);
                  setCount(count + 1);
                  setConfirm(false);
                  setLastNumber(6);
                  if (operators > 0) {
                    setVerify(true);
                  }
                  if (showTwo == true) {
                    setShowThree(true);
                  } else {
                    setShowValue(true);
                  }
                  if (count >= 0) {
                    setValue(value * 10 + 6);
                  }
                  setValueAux(6 / 10);
                  if (count > 0) {
                    NumbersArray[count] = lastNumber;
                  }
                }
              }}
            />
            <Button
              className="lg:mr-10 text-5xl  lg:mt-9  "
              value={3}
              onClick={() => {
                if (quant < 15) {
                  setQuant(quant + 1);
                  setCount(count + 1);
                  setConfirm(false);
                  setLastNumber(3);
                  if (operators > 0) {
                    setVerify(true);
                  }
                  if (showTwo == true) {
                    setShowThree(true);
                  } else {
                    setShowValue(true);
                  }
                  if (count >= 0) {
                    setValue(value * 10 + 3);
                  }
                  setValueAux(3 / 10);
                  if (count > 0) {
                    NumbersArray[count] = lastNumber;
                  }
                }
              }}
            />
            <Button
              className=" lg:mt-9 lg:text-5xl  text-blue-900 text-5xl "
              value={<MdOutlineKeyboardBackspace></MdOutlineKeyboardBackspace>}
              onClick={() => {
                if (value >= 0) {
                  if (NumbersArray[0] == null) {
                    setShowValue(false);
                    setConfirm(false);
                  }
                  if (confirm == false) {
                    if (NumbersArray[count] != null) {
                      NumbersArray.pop();
                    }
                    if (count <= 1) {
                      setValue(0);
                      setCount(0);
                    } else {
                      if (count > 0) {
                        setCount(count - 1);

                        if (count > 0) {
                          setValueAux(NumbersArray[count - 1] / 10);
                        }
                        if (lastNumber == 0) {
                          setValue(value / 10);
                          setLastNumber(1);
                        } else if (count > 1) {
                          setValue(value / 10 - valueAux);
                        }
                        if (count >= 1) {
                          setOperators(0);
                        }
                      }
                    }
                  }
                  setQuant(quant - 1);
                }
              }}
            />
          </div>
        </div>

        <div className="flex lg:h-2 lg: mb-12 lg:mt-20 lg:mb-12 lg:flex lg:flex-col   ">
          <Button
            className="lg:mr-10 text-6xl text-blue-900 "
            value={"-"}
            onClick={() => {
              if (confirm == false) {
                if (verify == true) {
                  setOperatorsSimbol((operatorsSimbol = "-"));
                  setOperators(3);
                } else {
                  setOperatorsSimbol((operatorsSimbol = "-"));
                  setShowTwo(true);
                  setShowValue(false);
                  setShow(true);
                  if (oldValue > 0) {
                  } else {
                    setOldValue(value);
                  }
                  setValue(0);

                  setCount(count + 0);
                  if (count >= 0) {
                    setOperators(3);
                  }
                }
                setQuant(0);
              }
            }}
          />
          <Button
            className="text-blue-900 text-6xl  lg:mt-4  "
            value={"+"}
            onClick={() => {
              if (confirm == false) {
                if (verify == true) {
                  setOperatorsSimbol((operatorsSimbol = "+"));
                  setOperators(4);
                } else {
                  setOperatorsSimbol((operatorsSimbol = "+"));
                  setShowTwo(true);
                  setShowValue(false);
                  setShow(true);
                  if (oldValue > 0) {
                  } else {
                    setOldValue(value);
                  }
                  setValue(0);
                  setCount(count + 0);
                  if (count >= 0) {
                    setOperators(4);
                  }
                }
              }
            }}
          />
          <Button
            className="lg:mr-10 text-6xl  text-blue-900 lg:mt-6  "
            value={"×"}
            onClick={() => {
              if (confirm == false) {
                if (verify == true) {
                  setOperatorsSimbol((operatorsSimbol = "*"));
                  setOperators(1);
                } else {
                  setOperatorsSimbol((operatorsSimbol = "*"));
                  setShowTwo(true);
                  setShowValue(false);
                  setShow(true);
                  setOldValue(value);

                  setValue(0);
                  setCount(count + 0);
                  if (count >= 0) {
                    setOperators(1);
                  }
                }
                setQuant(0);
              }
            }}
          />

          <Button
            className=" text-5xl  text-blue-900  lg:mt-8 "
            value={<RiDivideFill></RiDivideFill>}
            onClick={() => {
              if (confirm == false) {
                if (verify == true) {
                  setOperatorsSimbol((operatorsSimbol = "÷"));
                  setOperators(2);
                } else {
                  setOperatorsSimbol((operatorsSimbol = "÷"));
                  setShowTwo(true);
                  setShowValue(false);
                  setShow(true);
                  if (oldValue > 0) {
                  } else {
                    setOldValue(value);
                  }
                  setValue(0);
                  setCount(count + 0);
                  if (count >= 0) {
                    setOperators(2);
                  }
                }
                setQuant(0);
              }
            }}
          />
        </div>
      </div>
      <div className="flex h-16 mt-3 justify-center ">
        <Button
          className="bg-blue-900 hover:bg-blue-900 ml-3 w-72  lg:w-72   rounded-full text-5xl  "
          value={"="}
          onClick={() => {
            if (operators > 0) {
              setConfirm(true);
              setShowThree(false);
              setNewValue(value);
              setShowFour(true);
              if (operators == 1) {
                setValue(oldValue * value);
              } else if (operators === 2) {
                setValue(oldValue / value);
              } else if (operators == 3) {
                setValue(oldValue - value);
              } else if (operators == 4) {
                setValue(oldValue + value);
              }
            }
          }}
        />
      </div>
    </div>
  );
};

export default Numbers;
