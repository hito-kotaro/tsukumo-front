import { Item } from "@/types/types";
import { useState } from "react";

export const useItemList = () => {
  const [items, setItems] = useState<Item[]>([]);

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
