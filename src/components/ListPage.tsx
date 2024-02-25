import { PageStateHooks } from "@/hooks/usePageState";
import { FC } from "react";
import { Item, LocalStItem } from "@/types/types";
import { Button } from "@mui/material";
import { InputTextHooks } from "@/hooks/useInputText";
import { Card } from "./ui/Card";
import { ListCard } from "./ui/ListCard";

interface Props {
  pageStateHooks: PageStateHooks;
  listNameInputHooks: InputTextHooks;
  motoList: LocalStItem | undefined;
  days: number;
}

export const ListPage: FC<Props> = (props) => {
  const { pageStateHooks, motoList, listNameInputHooks, days } = props;
  const { toHome } = pageStateHooks;
  return (
    <div className="px-3">
      <Button variant="text" size="large" color="green" onClick={toHome}>
        ホームにもどる
      </Button>
      <h3 className="text-primary text-center">{listNameInputHooks.value}</h3>

      <div className="mt-3 space-y-2">
        {motoList
          ? motoList?.items.map((i: Item) => {
              return (
                <ListCard
                  key={i.id}
                  name={i.name}
                  memo={i.memo}
                  amount={i.dynamic ? i.amount * days : i.amount}
                />
              );
            })
          : ""}
      </div>
    </div>
  );
};
