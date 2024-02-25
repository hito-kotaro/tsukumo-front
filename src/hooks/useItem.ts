import { LocalStItem } from "@/types/types";
import { useState } from "react";

export interface ItemHooks {
  item: LocalStItem | undefined;
  selectItem: (i: LocalStItem) => void;
  clearItem: () => void;
}

export const useItem = () => {
  const [item, setItem] = useState<LocalStItem>();

  const selectItem = (i: LocalStItem) => {
    setItem(i);
  };

  const clearItem = () => {
    setItem(undefined);
  };

  return { item, selectItem, clearItem };
};
