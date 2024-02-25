import { PageStateHooks } from "@/hooks/usePageState";
import { FC } from "react";
import { TextBox } from "./ui/TextBox";
import { useInputText } from "@/hooks/useInputText";
import { TextArea } from "./ui/TextArea";
import { useCounter } from "@/hooks/useCounter";
import { Counter } from "./ui/Counter";
import { CheckLabel } from "./ui/CheckLabel";
import { useToggle } from "@/hooks/useToggle";
import { Item } from "@/types/types";
import { useItemList } from "@/hooks/useItemList";
import { useLocalStrage } from "@/hooks/useLocalStorage";
import { Card } from "./ui/Card";
import { Button } from "@mui/material";

interface Props {
  pageStateHooks: PageStateHooks;
}

export const MotoPage: FC<Props> = (props) => {
  const { pageStateHooks } = props;
  const { toHome } = pageStateHooks;
  const listNameHooks = useInputText("");
  const itemListHooks = useItemList();
  const itemNameHooks = useInputText("");
  const itemMemoHooks = useInputText("");
  const counterHooks = useCounter(1);
  const checkLabelHooks = useToggle(false);
  const localStorageHooks = useLocalStrage();

  const isInvalidListName = () => {
    // リストの名前が""でない
    // 登録されている持ち物数が0ではない
    if (listNameHooks.value === "") {
      return true;
    }

    if (itemListHooks.items.length === 0) {
      return true;
    }

    return false;
  };

  const isInvalidItemName = () => {
    // 持ち物の名前が入っている
    if (itemNameHooks.value === "") {
      return true;
    }
    return false;
  };

  return (
    <div className="px-3">
      <Button variant="text" size="large" color="green" onClick={toHome}>
        もどる
      </Button>
      {/* リストのモトの名前入力*/}
      <h3 className="text-primary text-center">新しいリストのモトを作成</h3>

      <div className="space-y-2">
        <Button
          disabled={isInvalidListName()}
          variant="contained"
          size="large"
          color="green"
          fullWidth
          onClick={() => {
            localStorageHooks.createMotoList(
              listNameHooks.value,
              itemListHooks.items,
            );
            toHome();
          }}
        >
          リストのモトを保存してホームに戻る
        </Button>

        <TextBox
          inputHooks={listNameHooks}
          placeholder="リストのモトに名前をつける"
        />
      </div>

      {/*ここを常に表示させたい*/}
      <p className="text-primary">必要な持ち物を入力して「追加」をタップ</p>

      <div className="space-y-3">
        <TextBox inputHooks={itemNameHooks} placeholder="持ち物名を入力" />
        <TextArea inputHooks={itemMemoHooks} placeholder="メモ" />
      </div>

      <div className="flex items-center justify-around mt-3">
        <h3>数量:</h3>
        <Counter counterHooks={counterHooks} />
      </div>

      <div className="flex justify-center mt-3">
        <CheckLabel
          label="宿泊日数によって数量が変動"
          toggleHooks={checkLabelHooks}
        />
      </div>

      <div>
        <Button
          disabled={isInvalidItemName()}
          variant="contained"
          color="green"
          fullWidth
          onClick={() => {
            itemListHooks.addItem({
              id: itemListHooks.items.length + 1,
              name: itemNameHooks.value,
              memo: itemMemoHooks.value,
              amount: counterHooks.value,
              dynamic: checkLabelHooks.isTrue,
            });
            itemNameHooks.clearValue();
            itemMemoHooks.clearValue();
            counterHooks.clearValue();
            checkLabelHooks.setFalse();
          }}
        >
          追加
        </Button>
      </div>
      <div className="mt-3 space-y-2">
        {itemListHooks.items.map((i: Item) => {
          return (
            <Card
              key={i.id}
              name={i.name}
              memo={i.memo}
              amount={i.amount}
              isDynamic={i.dynamic}
              handleClick={() => console.log("remove")}
            />
          );
        })}
      </div>
    </div>
  );
};
