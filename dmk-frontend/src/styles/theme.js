// MUI
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
  palette: {
    background: {
      default: "#fff"
    },
    primary: {
      main: "#0073b6"
    },
    secondary: {
      main: "#2e3359"
    },
    spacing: 8
  },
});

export default theme;
