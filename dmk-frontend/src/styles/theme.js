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
  overrides: {
    MUIDataTableToolbar: {
      actions: {
        '& span > button': {
          width: '200px',
          border: '1px solid #c4c4c4',
          borderRadius: '7px',
          padding: '14px',
          height: '56px',
          color: '#757575',
          '& .MuiIconButton-label': {
            justifyContent: 'space-between',
          },
          '& .MuiIconButton-label::before': {
            content: '"Filter"',
            fontSize: '16px'
          },
        },
        '& span > button:hover': {
          backgroundColor: 'transparent',
          color: '#757575'
        },
        rippleVisible: {
          opacity: 0
        },
      }
    },
  },
  props: {
    MuiButtonBase: {
      disableRipple: true, 
    },
  },
});

export default theme;
