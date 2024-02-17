import { ToggleHooks } from "@/hooks/useToggle";
import { FC } from "react";

interface Props {
  label: string;
  toggleHooks: ToggleHooks;
}

export const CheckLabel: FC<Props> = (props) => {
  const { label, toggleHooks } = props;
  return (
    <div className="flex items-center">
      <input
        className="h-4 w-4 accent-primary "
        onChange={toggleHooks.handleToggle}
        checked={toggleHooks.isTrue}
        id="check"
        type="checkbox"
      />
      <label htmlFor="check" className="text-gray font-semibold">
        {label}
      </label>
    </div>
  );
};
