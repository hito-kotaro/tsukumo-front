import { useState } from "react";

export interface ToggleHooks {
  isTrue: boolean;
  handleToggle: () => void;
  setTrue: () => void;
  setFalse: () => void;
}

export const useToggle = (defaultValue: boolean) => {
  const [isTrue, setIsTrue] = useState(defaultValue);

  const handleToggle = () => {
    setIsTrue((prevState) => !prevState);
  };

  const setTrue = () => {
    setIsTrue(true);
  };
  const setFalse = () => {
    setIsTrue(false);
  };

  return { isTrue, handleToggle, setTrue, setFalse };
};
