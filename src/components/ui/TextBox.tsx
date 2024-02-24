import { InputTextHooks } from "@/hooks/useInputText";
import { FC } from "react";

interface Props {
  inputHooks: InputTextHooks;
  placeholder?: string;
}

export const TextBox: FC<Props> = (props) => {
  const { inputHooks, placeholder } = props;
  const { value, handleChange } = inputHooks;
  return (
    <input
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
      className="bg-offWhite border-none focus:outline-none rounded-lg h-14 w-full text-2xl px-2 text-gray "
    />
  );
};
