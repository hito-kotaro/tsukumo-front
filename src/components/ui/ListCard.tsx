import { useToggle } from "@/hooks/useToggle";
import { FC } from "react";
import { FaCheckCircle } from "react-icons/fa";

interface Props {
  name: string;
  memo?: string;
  amount: number;
}

export const ListCard: FC<Props> = (props) => {
  const { name, memo, amount } = props;
  const checkedHooks = useToggle(false);

  return (
    <div
      className="z-0 relative p-1 drop-shadow-lg bg-white"
      onClick={checkedHooks.handleToggle}
    >
      <div className="flex items-center">
        {checkedHooks.isTrue ? (
          <FaCheckCircle size={24} className="text-primary mr-2" />
        ) : (
          ""
        )}
        <h2 className="text-primary text-lg">{name}</h2>
      </div>

      <div>
        <p className="text-gray my-2">{memo ? memo : ""}</p>
      </div>

      <div className="text-primary text-lg font-semibold flex justify-end items-center">
        {amount ? amount : ""}
      </div>
    </div>
  );
};
