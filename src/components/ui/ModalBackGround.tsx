import { FC } from "react";

interface Props {
  handleClick: () => void;
}

export const ModalBackGround: FC<Props> = (props) => {
  const { handleClick } = props;

  return (
    <div
      className="absolute z-20 top-0 left-0 h-full w-full bg-gray opacity-50"
      onClick={handleClick}
    />
  );
};
