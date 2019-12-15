import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Tabs, Tab, Typography } from '@material-ui/core';

const styles = (theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper
	},
	tabContent: {
		padding: theme.spacing.unit * 2
	}
});

const AppbarTabIntegration = ({ classes }) => {
	const [ value, setValue ] = useState(0);

	const handleOnChange = (e, value) => setValue(value);
	return (
		<div className={classes.root}>
			<AppBar position='static'>
				<Tabs value={value} onChange={handleOnChange}>
					<Tab label='Basic Information' />
					<Tab label='Accounts' />
					<Tab label='Data and Display' />
					<Tab label='Schedule' />
					<Tab label='Sharing' />
				</Tabs>
			</AppBar>
			{value === 0 && <Typography className={classes.tabContent}>Basic Information</Typography>}
			{value === 1 && <Typography className={classes.tabContent}>Accounts</Typography>}
			{value === 2 && <Typography className={classes.tabContent}>Data and display</Typography>}
			{value === 3 && <Typography className={classes.tabContent}>Schedule</Typography>}
			{value === 4 && <Typography className={classes.tabContent}>Sharing</Typography>}
		</div>
	);
};

export default withStyles(styles)(AppbarTabIntegration);
