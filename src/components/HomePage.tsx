import { PageStateHooks } from "@/hooks/usePageState";
import { FC } from "react";
import { Card } from "./ui/Card";
import { Switch } from "./ui/Switch";
import { useToggle } from "@/hooks/useToggle";
import { Button } from "@mui/material";
import { LocalStItem } from "@/types/types";
import { useLocalStrage } from "@/hooks/useLocalStorage";
import { MotoListItemDialog } from "./ui/MotoListItemDialog";
import { ItemHooks } from "@/hooks/useItem";
import { CounterHooks } from "@/hooks/useCounter";

interface Props {
  pageStateHooks: PageStateHooks;
  itemHooks: ItemHooks;
  dialogCounterHooks: CounterHooks;
}

export const HomePage: FC<Props> = (props) => {
  const { pageStateHooks, itemHooks, dialogCounterHooks } = props;
  const { toMoto } = pageStateHooks;
  const { motoList, getMotoList } = useLocalStrage();
  const switchToggleHooks = useToggle(true);
  const dialogHooks = useToggle(false);

  return (
    <div className="mt-3 px-3 space-y-3">
      <MotoListItemDialog
        open={dialogHooks.isTrue}
        handleClose={dialogHooks.setFalse}
        pageStateHooks={pageStateHooks}
        dialogCounterHooks={dialogCounterHooks}
        motoList={itemHooks.item}
      />
      <Switch
        leftText="リストのモト"
        rightText="もちものリスト"
        toggleHooks={switchToggleHooks}
      />
      {switchToggleHooks.isTrue ? (
        <>
          <Button
            variant="contained"
            fullWidth
            color="green"
            size="large"
            onClick={() => {
              itemHooks.clearItem();
              toMoto();
            }}
          >
            新しいリストのモトを作成
          </Button>
          <Button
            variant="contained"
            fullWidth
            color="green"
            size="large"
            onClick={getMotoList}
          >
            リストのモトを取得
          </Button>
          {motoList.map((m: LocalStItem) => {
            return (
              <Card
                key={m.id}
                name={m.name}
                handleClick={() => {
                  itemHooks.selectItem(m);
                  dialogHooks.setTrue();
                }}
              />
            );
          })}
        </>
      ) : (
        ""
      )}
    </div>
  );
};
