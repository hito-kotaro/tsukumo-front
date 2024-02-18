import { PageStateHooks } from "@/hooks/usePageState";
import { FC } from "react";
import { Button } from "./ui/Button";

interface Props {
  pageStateHooks: PageStateHooks;
}

export const ListPage: FC<Props> = (props) => {
  const { pageStateHooks } = props;
  const { toHome, toMoto } = pageStateHooks;
  return (
    <div>
      <h1>List</h1>
      <Button buttonText="toHome" buttonAction={toHome} />
      <Button buttonText="toMoto" buttonAction={toMoto} />
    </div>
  );
};
