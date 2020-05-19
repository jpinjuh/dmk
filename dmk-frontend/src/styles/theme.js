// MUI
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif'
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
    MUIDataTableBodyCell: {
      root: {
        padding: 0,
        fontSize: '13px'
      }
    },
    MUIDataTableHeadCell: {
      root: {
        padding: '8px 0',
        fontSize: '14px',
        fontWeight: 'bold',
        align: 'left'
      }
    },
    MuiButton: {
      root: {
        borderRadius: 5,
        border: 0,
        height: 40,
        textTransform: 'none',
        padding: '0 40px'
      }
    },
    MuiOutlinedInput: {
      root: {
        borderRadius: 5,
        height: 48,
       /* marginTop: '5px',
        alignItems: 'center',*/
        //fontSize: '14px'
      }
    }
  },
  props: {
    MuiButtonBase: {
      disableRipple: true, 
    },
    MuiChip: {
      size: 'small', 
    },
  },
});

export default theme;
