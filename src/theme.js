import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: '#222831',
    },
    secondary: {
      main: '#EEEEEE',
    }
  },
  typography: {
    fontFamily: 'monospace',
    fontWeightBold: 700,
    letterSpacing: ".3rem",
  }
});
