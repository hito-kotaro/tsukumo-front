"use client";

import { HomePage } from "@/components/HomePage";
import { ListPage } from "@/components/ListPage";
import { MotoPage } from "@/components/MotoPage";
import { useCounter } from "@/hooks/useCounter";
import { useItem } from "@/hooks/useItem";
import { usePageState } from "@/hooks/usePageState";
import { theme } from "@/muiTheme";
import { ThemeProvider } from "@mui/material";

export default function Home() {
  const pageStateHooks = usePageState(1);
  const itemHooks = useItem();
  const dialogCounterHooks = useCounter(1);

  return (
    <ThemeProvider theme={theme}>
      {pageStateHooks.pageId === 1 ? (
				// リストのモト/持ち物リストの一覧ページ
        <HomePage
          pageStateHooks={pageStateHooks}
          dialogCounterHooks={dialogCounterHooks}
          itemHooks={itemHooks}
        />
      ) : (
        ""
      )}
      {pageStateHooks.pageId === 2 ? (
				// ストのモトのシングルページ
        <MotoPage pageStateHooks={pageStateHooks} curList={itemHooks.item} />
      ) : (
        ""
      )}
      {pageStateHooks.pageId === 3 ? (
				// 持ち物リストのシングルページ
        <ListPage pageStateHooks={pageStateHooks} />
      ) : (
        ""
      )}
    </ThemeProvider>
  );
}
