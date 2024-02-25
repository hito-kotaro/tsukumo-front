import { FC } from "react";

interface Props {
  size?: "large" | "regular" | "small";
  disabled?: boolean;
  buttonText: string;
  buttonAction: () => void;
}

export const Button: FC<Props> = (props) => {
  const { size, disabled, buttonText, buttonAction } = props;

  if (size === "large") {
    return (
      <button
        disabled={disabled ? true : false}
        onClick={buttonAction}
        className="h-12 text-white text-lg bg-primary rounded-lg border-none w-full"
      >
        {buttonText}
      </button>
    );
  } else if (size === "small") {
    return (
      <button
        disabled={disabled ? true : false}
        onClick={buttonAction}
        className="h-8 text-white text-sm bg-primary rounded-lg border-none w-full"
      >
        {buttonText}
      </button>
    );
  } else {
    return (
      <button
        disabled={disabled ? true : false}
        onClick={buttonAction}
        className="h-10 text-white  bg-primary rounded-lg border-none w-full"
      >
        {buttonText}
      </button>
    );
  }
};
