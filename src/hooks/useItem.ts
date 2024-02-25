import { LocalStItem } from "@/types/types";
import { useState } from "react";

export interface ItemHooks {
  item: LocalStItem | undefined;
  selectItem: (i: LocalStItem) => void;
}

export const useItem = () => {
  const [item, setItem] = useState<LocalStItem>();

  const selectItem = (i: LocalStItem) => {
    setItem(i);
  };

  return { item, selectItem };
};
