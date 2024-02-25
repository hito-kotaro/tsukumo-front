import { MotoItem, MotoList } from "@/types/types";
import { useState } from "react";
import { useLocalStrage } from "./useLocalStorage";

export interface MotoListsHooks {
  motoLists: MotoList[];
  getMotoLists: () => void;
  createMotoList: (motoListName: string, motoItems: MotoItem[]) => void;
  updateMotoList: (id: number, newMotoList: MotoList) => void;
  removeMotoList: (id: number) => void;
}

export const useMotoLists = () => {
  const [motoLists, setMotoLists] = useState<MotoList[]>([]);

  const { lsUpdateMotoLists, lsGetMotoLists } = useLocalStrage();

  // ls = localStorage
  const getMotoLists = () => {
    const lsStrMotoLists = localStorage.getItem("motoLists");
    if (lsStrMotoLists) {
      const lsMotoLists: MotoList[] = JSON.parse(lsStrMotoLists);
      setMotoLists(lsMotoLists);
    }
  };

  // リストのモトを新規作成する（idが決まっていないので、リスト名とリスト内のアイテムは別々で渡している）
  const createMotoList = (motoListName: string, motoItems: MotoItem[]) => {
    const lsStrMotoLists = localStorage.getItem("motoLists");
    if (lsStrMotoLists) {
      // nullじゃなかったらそのままパース
      const lsMotoLists: MotoList[] = JSON.parse(lsStrMotoLists);

      const newMotoList: MotoList = {
        id: lsMotoLists.length + 1,
        name: motoListName,
        items: motoItems,
      };
      const newMotoLists = [...lsMotoLists, newMotoList];
      lsUpdateMotoLists(newMotoLists);
    } else {
      const newMotoList: MotoList = {
        id: 1,
        name: motoListName,
        items: motoItems,
      };

      lsUpdateMotoLists([newMotoList]);
    }
  };

  // 渡されたidを持つ既存のリストのモトを引数で渡されたリストのモトに更新する
  const updateMotoList = (id: number, newMotoList: MotoList) => {
    const lsStrMotoLists = lsGetMotoLists();
    if (lsStrMotoLists) {
      const lsMotoLists: MotoList[] = JSON.parse(lsStrMotoLists);
      const removedMotoLists: MotoList[] = lsMotoLists.filter((i: MotoList) => {
        return i.id !== id;
      });
      const updatedMotoLists = [...removedMotoLists, newMotoList];
      lsUpdateMotoLists(updatedMotoLists);
    }
  };

  const removeMotoList = (id: number) => {
    const lsStrMotoLists = lsGetMotoLists();
    if (lsStrMotoLists) {
      const lsMotoLists: MotoList[] = JSON.parse(lsStrMotoLists);
      const removedMotoList: MotoList[] = lsMotoLists.filter((i: MotoList) => {
        return i.id !== id;
      });
      lsUpdateMotoLists(removedMotoList);
    }
  };

  return {
    motoLists,
    getMotoLists,
    createMotoList,
    updateMotoList,
    removeMotoList,
  };
};
