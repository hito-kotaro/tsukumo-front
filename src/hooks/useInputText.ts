import { useState } from "react";

export interface InputTextHooks {
  value: string;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  clearValue: () => void;
}

export const useInputText = (defaultValue?: string) => {
  const [value, setValue] = useState(defaultValue ?? "");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setValue(e.target.value);
  };
  const clearValue = () => {
    setValue("");
  };

  return { value, handleChange, clearValue };
};
