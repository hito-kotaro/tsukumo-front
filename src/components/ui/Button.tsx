import { FC } from "react";

interface Props {
  size?: "large" | "regular" | "small";
  buttonText: string;
  buttonAction: () => void;
}

export const Button: FC<Props> = (props) => {
  const { size, buttonText, buttonAction } = props;

  if (size === "large") {
    return (
      <button
        onClick={buttonAction}
        className="h-12 text-white text-lg bg-primary rounded-lg border-none w-full"
      >
        {buttonText}
      </button>
    );
  } else if (size === "small") {
    return (
      <button
        onClick={buttonAction}
        className="h-8 text-white text-sm bg-primary rounded-lg border-none w-full"
      >
        {buttonText}
      </button>
    );
  } else {
    return (
      <button
        onClick={buttonAction}
        className="h-10 text-white  bg-primary rounded-lg border-none w-full"
      >
        {buttonText}
      </button>
    );
  }
};
