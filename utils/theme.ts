import { red } from "@mui/material/colors";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// Create a theme instance.
export let theme = createTheme({
  typography: {
    fontFamily: "Heebo, sans-serif",
    h6: {
      fontWeight: 400,
    },
  },
  palette: {
    primary: {
      main: "#039be5",
      dark: "#21243D",
      light: "#8695A4",
    },
    secondary: {
      main: "#EDF7FA",
      light: "#00A8CC",
      dark: "#142850",
    },

    error: {
      main: red.A400,
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        maxWidthSm: {
          maxWidth: "330px",
          "@media (min-width: 300px)": {
            maxWidth: "330px",
          },
        },
        maxWidthMd: {
          maxWidth: "960px",
          "@media (min-width: 900px)": {
            maxWidth: "960px",
          },
        },
      },
      defaultProps: {
        maxWidth: "md",
      },
      variants: [],
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "black",
          "&:hover, &.active": {
            color: "#FF6464",
          },
        },
      },
      defaultProps: {
        underline: "none",
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          padding: 20,
          justifyContent: "center",
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "contained", color: "primary" },
          style: { color: "white" },
        },
      ],
    },
  },
});

theme = responsiveFontSizes(theme);
