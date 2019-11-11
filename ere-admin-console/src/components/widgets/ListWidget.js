import React, { useEffect } from 'react';
import { Duration } from '../helpers/Utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import M from 'materialize-css';
import { withStyles} from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { getWidgetStyles } from '../helpers/StyleHelper';

const StyledTableCell = withStyles(theme => ({
  head: {
    color: theme.palette.common.black,
    fontWeight: 900
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const ListWidget = ({ data }) => {
  useEffect(() => {
    let elements = document.querySelectorAll('.collapsible');
    M.Collapsible.init(elements, {
      accordion: true,
      inDuration: Duration.IN_DURATION,
      outDuration: Duration.OUT_DURATION
    });
  });
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
  let elements = [];

  data.forEach((d, i) => {
    const columns = d.columns;
    const rows = d.details;
    elements.push(
      <li className={i === 0 ? 'active': ''} key={i}>
        <div className={`collapsible-header ${classes.headerBackground}`}>
          <i className='material-icons'>
            <FontAwesomeIcon icon={d.display.icon} size={d.display.size} color={d.display.color} />
          </i>
          <div className={classes.title}>{d.title}</div>
          <a href='#!' style={{ marginTop: '0.2rem' }}>
            <i className='material-icons'>refresh</i>
          </a>
        </div>
        <div className='collapsible-body'>
          <span>
            <div className={classes.tableWrapper}>
              <Table stickyHeader aria-label='sticky table'>
                <TableHead>
                  <TableRow>
                    {columns.map(column => (
                      <StyledTableCell key={column.id} align={column.align}>
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
              rowsPerPageOptions={[5,10, 25, 100]}
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
        </div>
      </li>
    );
  });

  return <ul className='collapsible popout'>{elements}</ul>;
};

export default ListWidget;
