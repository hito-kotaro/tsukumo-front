import { CounterHooks } from "@/hooks/useCounter";
import { FC } from "react";
import { FaSquarePlus, FaSquareMinus } from "react-icons/fa6";

interface Props {
	counterHooks: CounterHooks
}
export const Counter:FC<Props> = (props) => {
	const {counterHooks}=props
  return (
    <div>
      <div>
        <div className="flex space-x-2">
          <button onClick={counterHooks.handleMinus} className="border-none bg-white p-0">
            <FaSquareMinus size={40} className="text-primary" />
          </button>
          <div className="bg-light h-16 w-16 rounded-full flex items-center justify-center text-primary text-2xl font-semibold">
						{counterHooks.value}
          </div>
          <button onClick={counterHooks.handleAdd} className="border-none bg-white p-0">
            <FaSquarePlus size={40} className="text-primary" />
          </button>
        </div>
      </div>
    </div>
  );
};
