import { createUseStyles } from 'react-jss';

const getWidgetStyles = createUseStyles({
  title: {
    fontFamily: 'Open Sans Condensed',
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: '1rem',
    marginLeft: '1rem'
  },
  headerBackground: {
    backgroundColor: '#f2f2f2'
  },
  tableWrapper: {
    maxHeight: 440,
    overflow: 'auto'
  }
});

export { getWidgetStyles };
