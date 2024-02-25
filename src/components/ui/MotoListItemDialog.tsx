import { LocalStItem } from "@/types/types";
import { Button, Dialog } from "@mui/material";
import { FC, useContext } from "react";
import { Counter } from "./Counter";
import { useCounter } from "@/hooks/useCounter";
interface Props {
  open: boolean;
  handleClose: () => void;
  motoList: LocalStItem | undefined;
}

export const MotoListItemDialog: FC<Props> = (props) => {
  const { open, handleClose, motoList } = props;
  const counterHooks = useCounter(1);

  return (
    <Dialog open={open} onClose={handleClose} className="">
      <div className="p-5">
        <h3 className="text-center text-primary">{motoList?.name}</h3>
        <h4 className="text-primary">宿泊日数を設定してリストを作成</h4>
        <div className="text-primary flex items-center justify-around">
          <h3>宿泊日数:</h3>
          <Counter counterHooks={counterHooks} />
        </div>
        <div>
          <Button variant="contained" color="green" fullWidth>
            作成
          </Button>
        </div>
        <div className="mt-6 space-y-3">
          <Button variant="contained" color="green" fullWidth>
            モトの中身を確認
          </Button>
          <Button variant="contained" color="green" fullWidth>
            モトを削除
          </Button>
        </div>
      </div>
    </Dialog>
  );
};
