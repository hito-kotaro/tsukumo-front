import { FC } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

interface Props {
  name: string;
  memo: string;
  amount: number;
  isDynamic: boolean;
  isComplete: boolean;
  handleClick: () => void;
}

export const Card: FC<Props> = (props) => {
  const { name, memo, amount, isComplete, isDynamic, handleClick } = props;
  return (
    <div className="p-1 drop-shadow-lg bg-white" onClick={handleClick}>
      <div className="flex items-center">
        {isComplete ? (
          <FaCheckCircle size={24} className="text-primary mr-2" />
        ) : (
          ""
        )}
        <h2 className="text-primary text-lg">{name}</h2>
      </div>

      <div>
        <p className="text-gray my-2">{memo}</p>
      </div>

      <div className="text-primary text-lg font-semibold flex justify-end items-center">
        {amount}
        {isDynamic ? (
          <div className="text-primary flex items-center">
            <RxCross2 size={18} className="text-primary" />
            <AiFillHome size={24} className="text-primary" />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
