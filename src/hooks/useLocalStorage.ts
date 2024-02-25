import { Item, LocalStItem } from "@/types/types";
import { useState } from "react";

export const useLocalStrage = () => {
  const [motoList, setMotoList] = useState<LocalStItem[]>([]);

  const setLocalSt = (newMotoLists: LocalStItem[]) => {
    localStorage.setItem("motoList", JSON.stringify(newMotoLists));
  };

  const getMotoList = () => {
    const curStrList = localStorage.getItem("motoList");
    if (curStrList) {
      const curList: LocalStItem[] = JSON.parse(curStrList);
      setMotoList(curList);
    }
  };

  // リストのモトを新規作成する（idが決まっていないので、リスト名とリスト内のアイテムは別々で渡している）
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
      setLocalSt(curList);
    } else {
      // nullだったらから配列を定義
      const curList: LocalStItem[] = [];
      const data: LocalStItem = {
        id: curList.length + 1,
        name: listName,
        items,
      };
      curList.push(data);
      setLocalSt(curList);
    }
  };

  // 渡されたidを持つ既存のリストのモトを引数で渡されたリストのモトに更新する
  const updateMotoList = (id: number, newMotoList: LocalStItem) => {
    const curStrList = localStorage.getItem("motoList");
    if (curStrList) {
      const curList: LocalStItem[] = JSON.parse(curStrList);
      const updatedMotoList: LocalStItem[] = curList.filter(
        (i: LocalStItem) => {
          return i.id !== id;
        },
      );
      updatedMotoList.push(newMotoList);
      setLocalSt(updatedMotoList);
    }
  };

  const removeMotoList = (id: number) => {
    const curStrList = localStorage.getItem("motoList");
    if (curStrList) {
      const curList: LocalStItem[] = JSON.parse(curStrList);
      const removedMotoList: LocalStItem[] = curList.filter(
        (i: LocalStItem) => {
          return i.id !== id;
        },
      );
      setLocalSt(removedMotoList);
    }
  };

  return {
    motoList,
    getMotoList,
    createMotoList,
    updateMotoList,
    removeMotoList,
  };
};
