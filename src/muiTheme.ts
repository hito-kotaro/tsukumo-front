import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    green: Palette["primary"];
  }

  interface PaletteOptions {
    green?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    green: true;
  }
}

declare module "@mui/material/TextField" {
  interface TextFieldPropsColorOverrides {
    green: true;
  }
}

export const theme = createTheme({
  palette: {
    green: {
      main: "#24A19C",
      light: "#9ED2D0",
      dark: "#096C68",
      contrastText: "#FFFFFF",
    },
  },
});
