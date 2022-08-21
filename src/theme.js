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
  typography: {
    h1: {
      fontSize: "76px",
      fontWeight: 700,
      lineHeight: "78px",
      letterSpacing: "12px",
    },
    h2: {
      fontSize: "28px",
      fontWeight: 400,
      lineHeight: "28px",
      letterSpacing: "4px",
    },
    h2Bold: {
      fontSize: "28px",
      fontWeight: 700,
      lineHeight: "28px",
      letterSpacing: "4px",
    },
    h3: {
      fontSize: "20px",
      fontWeight: 400,
      lineHeight: "20px",
      letterSpacing: "4px",
    },
    h3Bold: {
      fontSize: "20px",
      fontWeight: "700",
      lineHeight: "20px",
      letterSpacing: "4px",
    },
    h4: {
      fontSize: "24px",
      fontWeight: 700,
      lineHeight: "26px",
      letterSpacing: "4px",
    },
    h5: {
      fontSize: "24px",
      fontWeight: 700,
      lineHeight: "22px",
      letterSpacing: "4px",
    },
    h6: {
      fontSize: "20px",
      fontWeight: 400,
      lineHeight: "32px",
      letterSpacing: "4px",
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
            backgroundColor: "#242424",
            color: "#fff",
          },
        },
      },
    },
  },
});

export default theme;
