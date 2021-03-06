import { createUseStyles } from 'react-jss';

const getWidgetStyles = createUseStyles({
  title: {
    fontFamily: 'Open Sans Condensed',
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: '1rem',
    marginLeft: '1rem',
    marginTop: '0.2rem'
  },
  tableWrapper: {
    maxHeight: 440,
    overflow: 'auto'
  },
  sidenav: {
    backgroundColor: 'black',
    color: 'white'
  },
  sideNavCheckBox: {
    marginLeft: '35px',
    color: 'black'
  }
});

export { getWidgetStyles };
