import { PageStateHooks } from "@/hooks/usePageState";
import { FC } from "react";
import { Card } from "./ui/Card";
import { Switch } from "./ui/Switch";
import { useToggle } from "@/hooks/useToggle";
import { Button } from "@mui/material";
import { MotoList } from "@/types/types";
import { MotoListDialog } from "./ui/MotoListDialog";
import { CounterHooks } from "@/hooks/useCounter";
import { InputTextHooks } from "@/hooks/useInputText";
import { MotoListHooks } from "@/hooks/useMotoList";
import { MotoListsHooks } from "@/hooks/useMotoLists";

interface Props {
  pageStateHooks: PageStateHooks;
  motoListHooks: MotoListHooks;
  motoListsHooks: MotoListsHooks;
  dialogCounterHooks: CounterHooks;
  listNameInputHooks: InputTextHooks;
}

export const HomePage: FC<Props> = (props) => {
  const {
    pageStateHooks,
    motoListHooks,
    motoListsHooks,
    dialogCounterHooks,
    listNameInputHooks,
  } = props;
  const { toMoto } = pageStateHooks;
  const switchToggleHooks = useToggle(true);
  const dialogHooks = useToggle(false);

  return (
    <div className="mt-3 px-3 space-y-3">
      <MotoListDialog
        open={dialogHooks.isTrue}
        handleClose={dialogHooks.setFalse}
        pageStateHooks={pageStateHooks}
        dialogCounterHooks={dialogCounterHooks}
        motoList={motoListHooks.motoList}
        listNameInputHooks={listNameInputHooks}
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
              motoListHooks.clearMotoList();
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
            onClick={motoListsHooks.getMotoLists}
          >
            リストのモトを取得
          </Button>
          {motoListsHooks.motoLists.map((mi: MotoList) => {
            return (
              <Card
                key={mi.id}
                name={mi.name}
                handleClick={() => {
                  motoListHooks.selectMotoList(mi);
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
