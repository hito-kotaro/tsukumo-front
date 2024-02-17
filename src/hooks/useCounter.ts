import { useState } from "react";

export interface CounterHooks {
  value: number;
  handleAdd: () => void;
  handleMinus: () => void;
}

export const useCounter = (defaultValue: number) => {
  const [value, setValue] = useState(defaultValue);

  const handleAdd = () => {
    if (value < 999) {
      setValue(value + 1);
    }
  };
  const handleMinus = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  return { value, handleAdd, handleMinus };
};
