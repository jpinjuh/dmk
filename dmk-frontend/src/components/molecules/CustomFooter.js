import React from "react";
import { useHistory, useLocation, Link } from "react-router-dom";

// MUI
import TableFooter from "@material-ui/core/TableFooter";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import MuiTablePagination from "@material-ui/core/TablePagination";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  
}));

const CustomFooter = (props) => {
  const { count, textLabels, rowsPerPage, page } = props;
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();

  const footerStyle = {
    display:'flex', 
    justifyContent: 'flex-end',
    padding: '0px 24px 0px 24px'
  };

  const handleRowChange = event => {
    props.changeRowsPerPage(event.target.value);
  };

  const handlePageChange = (_, page) => {
    props.changePage(page);
  };

  return (
    <TableFooter>
      <TableRow>
        <TableCell style={footerStyle} colSpan={1000}>
        
          <MuiTablePagination
            component="div"
            count={count}
            rowsPerPage={rowsPerPage}
            page={page}
            labelRowsPerPage={textLabels.rowsPerPage}
            labelDisplayedRows={({ from, to, count }) => `${from}-${to} ${textLabels.displayRows} ${count}`}
            backIconButtonProps={{
              'aria-label': textLabels.previous,
            }}
            nextIconButtonProps={{
              'aria-label': textLabels.next,
            }}
            rowsPerPageOptions={[10,20,50]}
            onChangePage={handlePageChange}
            onChangeRowsPerPage={handleRowChange}
          />
        </TableCell>
      </TableRow>
    </TableFooter>
  );
}


export default CustomFooter;