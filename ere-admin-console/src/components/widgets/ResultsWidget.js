import React from 'react';
import NoDataFound from './NoDataFound';
import Spinner from './Spinner';
import { withStyles} from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { getWidgetStyles } from '../helpers/StyleHelper';
import { isEmpty } from '../helpers/Utils';

const StyledTableCell = withStyles(theme => ({
  head: {
    color: theme.palette.common.black,
    fontWeight: 900
  },
  MuiTableCellRoot: {
    padding: 0
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const ResultsWidget = ({ data, columns, showSpinner }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };  

  const classes = getWidgetStyles();
  let rows = isEmpty(data) ? [] : isEmpty(data.results) ? [] : data.results;
  let elements = [];
  elements.push(
    <span>
      <div className={classes.tableWrapper}>
        <Table stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <StyledTableCell style={{padding: 0}} key={column.id} align={column.align}>
                  {column.label}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
              return (
                <TableRow hover role='checkbox' tabIndex={-1} key={row.entityValue}>
                  {columns.map(column => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 100]}
        component='div'
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        backIconButtonProps={{
          'aria-label': 'previous page'
        }}
        nextIconButtonProps={{
          'aria-label': 'next page'
        }}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </span>
  );

  return (
    <div>
      {showSpinner && <Spinner />}
      {data && !data.size && <NoDataFound message={data.message} />}
      {data && data.size && elements}
    </div>
  );
};

export default ResultsWidget;
