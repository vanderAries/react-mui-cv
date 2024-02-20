import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, Arial, sans-serif",
    fontSize: 8,
    h1: {
      fontFamily: "Montserrat Alternates, Arial, sans-serif",
      fontSize: 32,
      fontWeight: 800,
    },
    h2: {
      fontFamily: "Montserrat Alternates, Arial, sans-serif",
      fontSize: 24,
      fontWeight: 600,
    },
    h3: {
      fontFamily: "Montserrat Alternates, Arial, sans-serif",
      fontSize: 12,
      fontWeight: 700,
    },
    body1: {
      fontSize: 8,
      lineHeight: 1.2,
    },
  },
});

export default theme;
