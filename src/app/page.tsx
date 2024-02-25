"use client";

import { HomePage } from "@/components/HomePage";
import { ListPage } from "@/components/ListPage";
import { MotoPage } from "@/components/MotoPage";
import { useCounter } from "@/hooks/useCounter";
import { useInputText } from "@/hooks/useInputText";
import { useItem } from "@/hooks/useItem";
import { useMotoList } from "@/hooks/useMotoList";
import { useMotoLists } from "@/hooks/useMotoLists";
import { usePageState } from "@/hooks/usePageState";
import { theme } from "@/muiTheme";
import { ThemeProvider } from "@mui/material";

export default function Home() {
  const motoListHooks = useMotoList();
  const motoListsHooks = useMotoLists();

  const pageStateHooks = usePageState(1);
  const dialogCounterHooks = useCounter(1);
  const listNameInputHooks = useInputText("");

  return (
    <ThemeProvider theme={theme}>
      {pageStateHooks.pageId === 1 ? (
        // リストのモト/持ち物リストの一覧ページ
        <HomePage
          pageStateHooks={pageStateHooks}
          motoListHooks={motoListHooks}
          motoListsHooks={motoListsHooks}
          dialogCounterHooks={dialogCounterHooks}
          listNameInputHooks={listNameInputHooks}
        />
      ) : (
        ""
      )}
      {pageStateHooks.pageId === 2 ? (
        // ストのモトのシングルページ
        <MotoPage
          pageStateHooks={pageStateHooks}
          initialMotoList={motoListHooks.motoList}
          motoListsHooks={motoListsHooks}
        />
      ) : (
        ""
      )}
      {pageStateHooks.pageId === 3 ? (
        // 持ち物リストのシングルページ
        <ListPage
          pageStateHooks={pageStateHooks}
          motoList={motoListHooks.motoList}
          listNameInputHooks={listNameInputHooks}
          days={dialogCounterHooks.value}
        />
      ) : (
        ""
      )}
    </ThemeProvider>
  );
}
