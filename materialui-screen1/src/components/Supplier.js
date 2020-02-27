import React from 'react';
import Grid from '@material-ui/core/Grid';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import DateFnsUtils from '@date-io/date-fns'
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';


const styles = {
  root: {
    flex: 1,
    width: 850,
    margin: 'auto'
  },
  datePicker: {
    padding: 5,
  },
  button: {
    marginTop: 15
  },
  table: {
    marginTop: 15,
  },
  MuiTableContainerRoot: {
    width: '50%'
  },
}

const Row = (props) => <Grid container {...props} />
const Item = (props) => <Grid item {...props} />

const Supplier = ({ classes }) => {
  const [input, setInput] = React.useState({
    code: '',
    quantity: ''
  });
  const [data, setData] = React.useState({
    info: {
      supplier: '',
      date: new Date(),
      prices: []
    }
  });

  const handleSubmit = e => console.log(data);

  const handleDateChange = (date) => {
    setData({ info: { ...data.info, date: date } });
  }

  const handleSupplierOnChange = (e) => {
    setData({ info: { ...data.info, supplier: e.target.value } });
  }

  const handlePriceOnChange = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  const handleOnClick = e => {
    setData({ info: { ...data.info, prices: [...data.info.prices, { code: input.code, quantity: input.quantity }] } })
  };


  console.log('classes = ', classes);
  return (
    <div className={classes.root}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Row>
          <Item xs={12} sm={6} md={3}>
            <TextField style={{ marginTop: 20 }} label='Supplier' onChange={handleSupplierOnChange} />
          </Item>
          <Item xs={12} sm={6} md={3}>
            <KeyboardDatePicker
              className={classes.datePicker}
              margin='normal'
              variant='inline'
              id='datePicker'
              label='Select Date'
              format='MM/dd/yyyy'
              value={data.info.date}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </Item>
        </Row>
        <Row>
          <Item xs={12} sm={6} md={3}>
            <TextField label='Stock' name='code' onChange={handlePriceOnChange} />
          </Item>

          <Item xs={12} sm={6} md={3}>
            <TextField label='Quantity' name='quantity' onChange={handlePriceOnChange} />
          </Item>

          <Item xs={12} sm={6} md={3}>
            <Fab
              color='primary'
              size='small'
              aria-label='add'
              className={classes.formElement}
              style={{ marginTop: 10 }}
              onClick={handleOnClick}
            >
              <AddIcon />
            </Fab>
          </Item>
        </Row>
        <Row>
          <TableContainer component={Paper} classes={{ root: classes.MuiTableContainerRoot }}>
            <Table className={classes.table} size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell>Code</TableCell>
                  <TableCell>Quantity</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.info.prices.map(row => (
                  <TableRow key={row.code}>
                    <TableCell>{row.code}</TableCell>
                    <TableCell>{row.quantity}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Row>
        <Row spacing={10}>
          <Item xs={12} sm={6} md={3}>
            <Button className={classes.button} variant='contained' color='primary' onClick={handleSubmit}>Submit</Button>
          </Item>
        </Row>
      </MuiPickersUtilsProvider >
    </div>
  );
}

export default withStyles(styles)(Supplier);
