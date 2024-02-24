import { PageStateHooks } from "@/hooks/usePageState";
import { FC, useState } from "react";
import { Button } from "./ui/Button";
import { TextBox } from "./ui/TextBox";
import { useInputText } from "@/hooks/useInputText";
import { TextArea } from "./ui/TextArea";
import { useCounter } from "@/hooks/useCounter";
import { Counter } from "./ui/Counter";
import { CheckLabel } from "./ui/CheckLabel";
import { useToggle } from "@/hooks/useToggle";
import { Item } from "@/types/types";
import { useItem } from "@/hooks/useItem";
import { useLocalStrage } from "@/hooks/useLocalStorage";
import { Card } from "./ui/Card";

interface Props {
  pageStateHooks: PageStateHooks;
}

export const MotoPage: FC<Props> = (props) => {
  const { pageStateHooks } = props;
  const { toHome, toList } = pageStateHooks;
  const listNameHooks = useInputText("");
  const itemListHooks = useItem();
  const itemNameHooks = useInputText("");
  const itemMemoHooks = useInputText("");
  const counterHooks = useCounter(0);
  const checkLabelHooks = useToggle(false);
  const localStorageHooks = useLocalStrage();

  return (
    <div className="px-3">
      <h3 className="text-primary text-center">新しいリストのモトを作成</h3>
      <Button
        buttonText="リストのモトを保存して戻る"
        size="large"
        buttonAction={() => {
          localStorageHooks.createMotoList(
            listNameHooks.value,
            itemListHooks.items,
          );
        }}
      />
      <TextBox
        inputHooks={listNameHooks}
        placeholder="リストのモトに名前をつける"
      />

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
          size="large"
          buttonText="追加"
          buttonAction={() => {
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
        />
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
