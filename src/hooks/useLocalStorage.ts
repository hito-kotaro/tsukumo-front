import { Item, LocalStItem } from "@/types/types";
import { useCallback, useState } from "react";

export const useLocalStrage = () => {
  const [motoList, setMotoList] = useState<LocalStItem[]>([]);

  const getMotoList = () => {
    const curStrList = localStorage.getItem("motoList");
    if (curStrList) {
      const curList: LocalStItem[] = JSON.parse(curStrList);
      setMotoList(curList);
    }
  };

  const createMotoList = (listName: string, items: Item[]) => {
    const curStrList = localStorage.getItem("motoList");
    if (curStrList) {
      // nullじゃなかったらそのままパース
      const curList: LocalStItem[] = JSON.parse(curStrList);
      const data: LocalStItem = {
        id: curList.length + 1,
        name: listName,
        items,
      };
      curList.push(data);
      localStorage.setItem("motoList", JSON.stringify(curList));
    } else {
      // nullだったらから配列を定義
      const curList: LocalStItem[] = [];
      const data: LocalStItem = {
        id: curList.length + 1,
        name: listName,
        items,
      };
      curList.push(data);
      localStorage.setItem("motoList", JSON.stringify(curList));
    }
  };

  const removeItem = (listId: number, itemId: number) => {};

  return { motoList, getMotoList, createMotoList };
};
