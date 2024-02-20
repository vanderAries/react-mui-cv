import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

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
      lineHeight: 1,
    },
    h3: {
      fontFamily: "Montserrat Alternates, Arial, sans-serif",
      fontSize: 12,
      fontWeight: 700,
    },
    h4: {
      fontSize: 10,
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: 8,
      fontWeight: 600,
      textDecoration: "underline",
      textUnderlineOffset: 1,
      color: grey[600],
    },
    body1: {
      fontSize: 8,
      lineHeight: 1.1,
      color: grey[800],
    },
  },
});

export default theme;
