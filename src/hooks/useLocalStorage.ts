import { Item } from "@/types/types";

export const useLocalStrage = () => {
  const createMotoList = (listName: string, items: Item[]) => {
    // リストを受け取ってlsにセットする
    // キーはリスト名
		console.log(listName)
		console.log(items)
    localStorage.setItem(listName, JSON.stringify(items));
  };

  const removeItem = (listId: number, itemId: number) => {};

  return { createMotoList };
};
