import { PageStateHooks } from "@/hooks/usePageState";
import { FC } from "react";
import { Button } from "./ui/Button";

interface Props {
  pageStateHooks: PageStateHooks;
}

export const MotoPage: FC<Props> = (props) => {
  const { pageStateHooks } = props;
  const { toHome, toList } = pageStateHooks;
  return (
    <div>
      <h1>Moto</h1>
      <Button buttonText="toHome" buttonAction={toHome} />
      <Button buttonText="toList" buttonAction={toList} />
    </div>
  );
};
