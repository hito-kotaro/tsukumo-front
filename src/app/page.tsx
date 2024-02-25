"use client";

import { HomePage } from "@/components/HomePage";
import { ListPage } from "@/components/ListPage";
import { MotoPage } from "@/components/MotoPage";
import { useItem } from "@/hooks/useItem";
import { usePageState } from "@/hooks/usePageState";
import { theme } from "@/muiTheme";
import { ThemeProvider } from "@mui/material";

export default function Home() {
  const pageStateHooks = usePageState(1);
  const itemHooks = useItem();

  return (
    <ThemeProvider theme={theme}>
      {pageStateHooks.pageId === 1 ? (
        <HomePage pageStateHooks={pageStateHooks} itemHooks={itemHooks} />
      ) : (
        ""
      )}
      {pageStateHooks.pageId === 2 ? (
        <MotoPage pageStateHooks={pageStateHooks} />
      ) : (
        ""
      )}
      {pageStateHooks.pageId === 3 ? (
        <ListPage pageStateHooks={pageStateHooks} />
      ) : (
        ""
      )}
    </ThemeProvider>
  );
}
