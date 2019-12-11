import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import { orange } from '@material-ui/core/colors';

const theme = createMuiTheme({
	status: {
		danger: orange[500]
	}
});

ReactDOM.render(
	<BrowserRouter>
		<ThemeProvider theme={theme}>
			<Route component={App} />
		</ThemeProvider>
	</BrowserRouter>,
	document.getElementById('root')
);
