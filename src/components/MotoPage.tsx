import { PageStateHooks } from "@/hooks/usePageState";
import { FC } from "react";
import { TextBox } from "./ui/TextBox";
import { useInputText } from "@/hooks/useInputText";
import { TextArea } from "./ui/TextArea";
import { useCounter } from "@/hooks/useCounter";
import { Counter } from "./ui/Counter";
import { CheckLabel } from "./ui/CheckLabel";
import { useToggle } from "@/hooks/useToggle";
import { Item,  MotoList } from "@/types/types";
import { Card } from "./ui/Card";
import { Button } from "@mui/material";
import { MotoListsHooks } from "@/hooks/useMotoLists";
import { useMotoItems } from "@/hooks/useMotoItems";

interface Props {
  pageStateHooks: PageStateHooks;
  initialMotoList?: MotoList;
	motoListsHooks: MotoListsHooks
}

export const MotoPage: FC<Props> = (props) => {
  const { pageStateHooks, initialMotoList, motoListsHooks } = props;
  const { toHome } = pageStateHooks;

  const listNameHooks = useInputText(
    initialMotoList?.name ? initialMotoList.name : "",
  );
	const motoItemListHooks = useMotoItems(
    initialMotoList?.items ? initialMotoList.items : [],
	)

  const itemNameHooks = useInputText("");
  const itemMemoHooks = useInputText("");
  const counterHooks = useCounter(1);
  const checkLabelHooks = useToggle(false);

  const isInvalidListName = () => {
    // リストの名前が""でない
    // 登録されている持ち物数が0ではない
    if (listNameHooks.value === "") {
      return true;
    }

    if (motoItemListHooks.motoItems.length === 0) {
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
        ホームにもどる
      </Button>

      {/* リストのモトの名前入力*/}
      <h3 className="text-primary text-center">{`${initialMotoList?.id ? "リストのモトを更新" : "新しいリストのモトを作成"}`}</h3>

      <div className="space-y-2">
        <Button
          disabled={isInvalidListName()}
          variant="contained"
          size="large"
          color="green"
          fullWidth
          onClick={() => {
            if (initialMotoList) {
              const newMotoList: MotoList = {
                id: initialMotoList.id,
                name: listNameHooks.value,
                items: motoItemListHooks.motoItems,
              };
              motoListsHooks.updateMotoList(initialMotoList.id, newMotoList);
            } else {
              motoListsHooks.createMotoList(
                listNameHooks.value,
                motoItemListHooks.motoItems,
              );
            }
            toHome();
          }}
        >
          {`${initialMotoList?.id ? "リストのモトを更新してもどる" : "リストのモトを保存してもどる"}`}
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
            motoItemListHooks.addMotoItem({
              id: motoItemListHooks.motoItems.length + 1,
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
        {motoItemListHooks.motoItems.map((i: Item) => {
          return (
            <Card
              key={i.id}
              name={i.name}
              memo={i.memo}
              amount={i.amount}
              isDynamic={i.dynamic}
              handleClick={() => motoItemListHooks.removeMotoItem(i.id)}
            />
          );
        })}
      </div>
    </div>
  );
};
