import { useState } from "react";

export interface ToggleHooks {
  isTrue: boolean;
  handleToggle: () => void;
}

export const useToggle = (defaultValue: boolean) => {
  const [isTrue, setIsTrue] = useState(defaultValue);

  const handleToggle = () => {
    setIsTrue((prevState) => !prevState);
  };

  return { isTrue, handleToggle };
};
