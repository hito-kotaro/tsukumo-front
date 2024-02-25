import { PageStateHooks } from "@/hooks/usePageState";
import { FC } from "react";
import { Card } from "./ui/Card";
import { Switch } from "./ui/Switch";
import { useToggle } from "@/hooks/useToggle";
import { Button } from "@mui/material";

interface Props {
  pageStateHooks: PageStateHooks;
}

export const HomePage: FC<Props> = (props) => {
  const { pageStateHooks } = props;
  const { toMoto, toList } = pageStateHooks;
  const switchToggleHooks = useToggle(true);
  return (
    <div className="mt-3 px-3 space-y-3">
      <Switch
        leftText="リストのモト"
        rightText="もちものリスト"
        toggleHooks={switchToggleHooks}
      />
      {switchToggleHooks.isTrue ? (
        <Button
          variant="contained"
          fullWidth
          color="green"
          size="large"
          onClick={toMoto}
        >
          新しいリストのモトを作成
        </Button>
      ) : (
        ""
      )}
    </div>
  );
};
