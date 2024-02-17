import { ToggleHooks } from "@/hooks/useToggle";
import { FC } from "react";

interface Props {
  leftText: string;
  rightText: string;
  toggleHooks: ToggleHooks;
}

export const Switch: FC<Props> = (props) => {
  const { leftText, rightText, toggleHooks } = props;

  return (
    <div
      onClick={toggleHooks.handleToggle}
      className="w-full border-solid border-primary border  relative  h-14 rounded-full"
    >
      <div
        className={`bg-primary h-14 w-1/2 rounded-full border-primary  transition-transform transform ${toggleHooks.isTrue ? "translate-x-0" : "translate-x-full"} `}
      />
      <div
        className={`absolute top-1/2 -translate-y-1/2 left-7 transition-transform transform ${toggleHooks.isTrue ? "text-white" : "text-ghost"}`}
      >
        {leftText}
      </div>
      <div
        className={`absolute top-1/2 -translate-y-1/2 right-7 ${toggleHooks.isTrue ? "text-ghost" : "text-white"}`}
      >
        {rightText}
      </div>
    </div>
  );
};
