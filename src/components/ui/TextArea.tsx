import { InputTextHooks } from "@/hooks/useInputText";
import { FC } from "react";

interface Props {
	inputHooks: InputTextHooks
}

export const TextArea:FC<Props> = (props) => {
	const {inputHooks} = props
	const {value, handleChange} = inputHooks
  return (
    <textarea value={value} onChange={handleChange} className="bg-offWhite border-none focus:outline-none rounded-lg h-20 w-full text-lg px-2 text-gray " />
  );
};
