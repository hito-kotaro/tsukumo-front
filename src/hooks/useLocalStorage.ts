import { MotoList } from "@/types/types";

export const useLocalStrage = () => {
  const lsUpdateMotoLists = (newMotoLists: MotoList[]) => {
    localStorage.setItem("motoLists", JSON.stringify(newMotoLists));
  };

  const lsGetMotoLists = () => {
    return localStorage.getItem("motoLists");
  };

  const lsUpdateLists = (newLists: MotoList[]) => {
    localStorage.setItem("lists", JSON.stringify(newLists));
  };

  const lsGetLists = () => {
    return localStorage.getItem("lists");
  };

  return {
    lsUpdateMotoLists,
    lsGetMotoLists,
    lsUpdateLists,
    lsGetLists,
  };
};
