import React, { useState } from 'react';
import compose from 'recompose/compose';
import withWidth from '@material-ui/core/withWidth';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Tabs, Tab, Typography } from '@material-ui/core';
import Header from './widgets/Header';

const styles = (theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper
	},
	tabContent: {
		padding: theme.spacing(2)
	}
});

const AppbarTabIntegration = ({ classes, width }) => {
	const [ value, setValue ] = useState(0);

	const handleOnChange = (e, value) => setValue(value);
	return (
		<div className={classes.root}>
			<Header title='Tabs and Integration with AppBar' />
			<AppBar position='static'>
				<Tabs
					value={value}
					onChange={handleOnChange}
					centered
					variant={[ 'xs', 'sm' ].includes(width) ? null : 'fullWidth'}
				>
					<Tab label='Basic Information' />
					<Tab label='Accounts' />
					<Tab label='Data and Display' />
					<Tab label='Schedule' />
				</Tabs>
			</AppBar>
			{value === 0 && <Typography className={classes.tabContent}>Basic Information</Typography>}
			{value === 1 && <Typography className={classes.tabContent}>Accounts</Typography>}
			{value === 2 && <Typography className={classes.tabContent}>Data and display</Typography>}
			{value === 3 && <Typography className={classes.tabContent}>Schedule</Typography>}
		</div>
	);
};

export default compose(withWidth(), withStyles(styles))(AppbarTabIntegration);
//export default withWidth(withStyles(styles))(AppbarTabIntegration);
