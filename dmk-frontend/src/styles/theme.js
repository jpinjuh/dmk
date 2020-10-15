// MUI
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif'
  },
  palette: {
    background: {
      default: "#F3F3F3",
      paper: "#fff"
    },
    primary: {
      main: "#2196f3"
    },
    secondary: {
      main: "#2E3359"
    },
    spacing: 8,
  },
  overrides: {
    MUIDataTableBodyCell: {
      root: {
        padding: 0,
        fontSize: '13px',
        '& .MuiButtonBase-root': {
          height: '30px !important'
        }
      }
    },
    MuiGrid: {
      root: {
        paddingBottom: '0px !important',
       //paddingTop: '0px !important'
      }
    },
    MUIDataTableHeadCell: {
      root: {
        padding: '8px 0',
        fontSize: '14px',
        fontWeight: 'bold',
      }
    },
    MuiTableCell: {
      root: {
        padding: 0,
        '& .MuiButtonBase-root': {
          height: '30px !important'
        }
      }
    },
    MUIDataTableBodyCell: {
      root: {
        height: '30px !important',
        padding: 0
      }
    },
    MuiPaper: {
      root: {
        backgroundColor: '#fff'
      }
    },
    MuiButton: {
      root: {
        borderRadius: 5,
        border: 0,
        height: 36,
        textTransform: 'none',
        padding: '0 40px'
      }
    },
    MuiOutlinedInput: {
      root: {
        borderRadius: 5,
        height: 36,
        //marginTop: '5px',
        //alignItems: 'center',
        fontSize: '14px',
      },
      adornedEnd: {
        paddingRight: 0
      }
    },
    MuiAutocomplete: {
      root: {
        '& .MuiAutocomplete-input': {
          padding: '0px 0px 0px 5px !important'
        }
      }
    },
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: '#0073b6',
      },
    },
    MuiPickersCalendarHeader: {
      switchHeader: {
        // backgroundColor: lightBlue.A200,
        // color: "white",
      },
    },
    MuiPickersDay: {
      day: {
        color: '#0073b6',
      },
      daySelected: {
        backgroundColor: '#0073b6',
      },
      dayDisabled: {
        color: '#0073b6',
      },
      current: {
        color: '#0073b6',
      },
    },
    MuiPickersModal: {
      dialogAction: {
        color: '#0073b6',
      },
    },
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
