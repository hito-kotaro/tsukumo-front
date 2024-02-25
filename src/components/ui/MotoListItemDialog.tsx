import { LocalStItem } from "@/types/types";
import { Button, Dialog, Divider } from "@mui/material";
import { FC, useContext } from "react";
import { Counter } from "./Counter";
import { CounterHooks, useCounter } from "@/hooks/useCounter";
import { PageStateHooks } from "@/hooks/usePageState";
import { useLocalStrage } from "@/hooks/useLocalStorage";
interface Props {
  open: boolean;
  handleClose: () => void;
  pageStateHooks: PageStateHooks;
  dialogCounterHooks: CounterHooks;
  motoList: LocalStItem | undefined;
}

export const MotoListItemDialog: FC<Props> = (props) => {
  const { open, handleClose, motoList, pageStateHooks, dialogCounterHooks } =
    props;
  const { removeMotoList } = useLocalStrage();

  return (
    <Dialog open={open} onClose={handleClose} className="">
      <div className="p-5">
        <h3 className="text-center text-primary">{motoList?.name}</h3>
        <h4 className="text-primary">宿泊日数を設定してリストを作成</h4>
        <div className="text-primary flex items-center justify-around">
          <h3>宿泊日数:</h3>
          <Counter counterHooks={dialogCounterHooks} />
        </div>
        <div>
          <Button variant="contained" color="green" fullWidth>
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
