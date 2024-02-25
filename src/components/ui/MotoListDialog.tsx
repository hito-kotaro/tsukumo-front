import { LocalStItem } from "@/types/types";
import { Button, Dialog, Divider } from "@mui/material";
import { FC, useEffect } from "react";
import { Counter } from "./Counter";
import { CounterHooks } from "@/hooks/useCounter";
import { PageStateHooks } from "@/hooks/usePageState";
import { TextBox } from "./TextBox";
import { InputTextHooks } from "@/hooks/useInputText";
import { useMotoLists } from "@/hooks/useMotoLists";
interface Props {
  open: boolean;
  handleClose: () => void;
  pageStateHooks: PageStateHooks;
  dialogCounterHooks: CounterHooks;
  motoList: LocalStItem | undefined;
  listNameInputHooks: InputTextHooks;
}

export const MotoListDialog: FC<Props> = (props) => {
  const {
    open,
    handleClose,
    motoList,
    pageStateHooks,
    dialogCounterHooks,
    listNameInputHooks,
  } = props;

  const { removeMotoList } = useMotoLists();

  useEffect(() => {
    listNameInputHooks.clearValue();
  }, []);

  return (
    <Dialog open={open} onClose={handleClose} className="">
      <div className="p-5">
        <h3 className="text-center text-primary">{motoList?.name}</h3>
        <h4 className="text-primary">宿泊数と名前を設定してリストを作成</h4>
        <div>
          <TextBox
            inputHooks={listNameInputHooks}
            placeholder="もちものリストの名前を入力"
            size="small"
          />
        </div>
        <div className="text-primary flex items-center justify-around">
          <h3>宿泊日数:</h3>
          <Counter counterHooks={dialogCounterHooks} />
        </div>
        <div>
          <Button
            variant="contained"
            color="green"
            fullWidth
            onClick={() => {
              pageStateHooks.toList();
            }}
          >
            作成
          </Button>
        </div>
        <div className="mt-3 space-y-3">
          <Divider />
          <Button
            variant="contained"
            color="green"
            fullWidth
            onClick={pageStateHooks.toMoto}
          >
            モトの中身を確認
            {/*motoページへ*/}
          </Button>
          <Button
            variant="contained"
            color="green"
            fullWidth
            onClick={() => {
              if (motoList) {
                removeMotoList(motoList.id);
              }
              handleClose();
              pageStateHooks.toHome();
            }}
          >
            モトを削除
          </Button>
        </div>
      </div>
    </Dialog>
  );
};
