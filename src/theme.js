import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#ffffff",
      dark: "#242424",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#64EEBC",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          "&:active": {
            backgroundColor: "transparent",
          },
          "&:hover": {
            backgroundColor: "transparent",
          },
          "&:disabled": {
            backgroundColor: "#919191",
            color: "#000",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#242424",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          "&.MuiPaper-root": {
            width: "100%",
            backgroundColor: "#242424",
            color: "#fff",
          },
        },
      },
    },
  },
});

export default theme;
