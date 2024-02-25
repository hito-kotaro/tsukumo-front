import { Item } from "@/types/types";
import { useState } from "react";

export const useItemList = (defaultList: Item[]) => {
  const [items, setItems] = useState<Item[]>(defaultList);

  const addItem = (item: Item) => {
    const newItems = [...items, item];
    setItems(newItems);
    console.log(newItems);
  };

  const removeItem = (id: number) => {
    const newItems = items.filter((i: Item) => {
      return i.id !== id;
    });
    setItems(newItems);
  };

  return { items, addItem, removeItem };
};
