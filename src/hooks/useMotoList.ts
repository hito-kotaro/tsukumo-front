import { MotoList } from "@/types/types";
import { useState } from "react";

export interface MotoListHooks {
	motoList: MotoList | undefined;
	selectMotoList: (selectedMotoList: MotoList) => void
	clearMotoList: () => void
}

export const useMotoList = () => {
  const [motoList, setMotoList] = useState<MotoList>();

  const selectMotoList = (selectedMotoList: MotoList) => {
    setMotoList(selectedMotoList);
  };

  const clearMotoList = () => {
    setMotoList(undefined);
  };

  return { motoList, selectMotoList, clearMotoList };
};
