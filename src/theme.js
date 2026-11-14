import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#1976d2" },
    background: { default: "#ffffff" },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: { scrollBehavior: "smooth" },
        "section[id], footer[id]": { scrollMarginTop: 64 },
      },
    },
  },
});

export default theme;
