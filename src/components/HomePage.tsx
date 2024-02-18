import { PageStateHooks } from "@/hooks/usePageState";
import { FC } from "react";
import { Button } from "./ui/Button";

interface Props {
  pageStateHooks: PageStateHooks;
}

export const HomePage: FC<Props> = (props) => {
  const { pageStateHooks } = props;
  const { toMoto, toList } = pageStateHooks;
  return (
    <div>
      <h1>Home</h1>
      <Button buttonText="toMoto" buttonAction={toMoto} />
      <Button buttonText="toList" buttonAction={toList} />
    </div>
  );
};
