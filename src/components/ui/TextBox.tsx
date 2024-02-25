import { InputTextHooks } from "@/hooks/useInputText";
import { FC } from "react";

interface Props {
  inputHooks: InputTextHooks;
  placeholder?: string;
  size?: "small" | "regular" | "large";
}

export const TextBox: FC<Props> = (props) => {
  const { inputHooks, placeholder, size } = props;
  const { value, handleChange } = inputHooks;
	if(size==='small'){
  return (
    <input
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
      className="bg-offWhite border-none focus:outline-none rounded-lg h-9 w-full px-2 text-gray "
    />
  );
	}
	if(size==='large'){
  return (
    <input
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
      className="bg-offWhite border-none focus:outline-none rounded-lg h-14 w-full text-2xl px-2 text-gray "
    />
  );
	}

  return (
    <input
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
      className="bg-offWhite border-none focus:outline-none rounded-lg h-10 w-full text-lg px-2 text-gray "
    />
  );
};
