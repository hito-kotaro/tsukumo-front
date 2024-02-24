import { PageStateHooks } from "@/hooks/usePageState";
import { FC } from "react";
import { Button } from "./ui/Button";
import { Card } from "./ui/Card";
import { Switch } from "./ui/Switch";
import { useToggle } from "@/hooks/useToggle";

interface Props {
  pageStateHooks: PageStateHooks;
}

export const HomePage: FC<Props> = (props) => {
  const { pageStateHooks } = props;
  const { toMoto, toList } = pageStateHooks;
  const switchToggleHooks = useToggle(true);
  const sample = [
    { id: 1, name: "test", memo: "menu test" },
    { id: 2, name: "test", memo: "menu test" },
    { id: 3, name: "test", memo: "menu test" },
    { id: 4, name: "test", memo: "menu test" },
    { id: 5, name: "test", memo: "menu test" },
    { id: 6, name: "test", memo: "menu test" },
    { id: 7, name: "test", memo: "menu test" },
    { id: 8, name: "test", memo: "menu test" },
    { id: 9, name: "test", memo: "menu test" },
    { id: 10, name: "test", memo: "menu test" },
  ];

  return (
    <div className="mt-3 px-3 space-y-3">
      <Switch
        leftText="リストのモト"
        rightText="もちものリスト"
        toggleHooks={switchToggleHooks}
      />
      {switchToggleHooks.isTrue ? (
        <Button
          buttonText="新しいリストのモトを作成"
          buttonAction={toMoto}
          size="large"
        />
      ) : (
        ""
      )}
    </div>
  );
};
