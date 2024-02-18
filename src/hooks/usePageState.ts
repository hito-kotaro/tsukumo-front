import { useState } from "react";

export interface PageStateHooks {
  pageId: 1 | 2 | 3;
  toHome: () => void;
  toMoto: () => void;
  toList: () => void;
}

export const usePageState = (defaultValue: 1 | 2 | 3) => {
  const [pageId, setPageId] = useState<1 | 2 | 3>(defaultValue);

  const toHome = () => {
    setPageId(1);
  };

  const toMoto = () => {
    setPageId(2);
  };

  const toList = () => {
    setPageId(3);
  };

  return { pageId, toHome, toMoto, toList };
};
