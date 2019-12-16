import React, { useState } from 'react';
import { withStyles } from '@material-ui/styles';
import { Tab, Tabs, Typography } from '@material-ui/core';

const styles = (theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper
	},
	tabContent: {
		padding: theme.spacing(2)
	}
});

const StateBasedTabs = ({ classes }) => {
	const [ tabs, setTabs ] = useState([
		{
			active: true,
			label: 'Reports',
			content: 'This is the Reports tab'
		},
		{
			active: false,
			label: 'Statements',
			content: 'This is the Statements Tab'
		},
		{
			active: false,
			label: 'Advices',
			content: 'This is the Advices Tab'
		}
	]);

	const handleOnChange = (e, value) => {
		setTabs(
			tabs.map((tab) => ({ ...tab, active: false })).map((tab, index) => ({ ...tab, active: index === value }))
		);
	};

	const active = tabs.findIndex((tab) => tab.active);
	const content = tabs[active].content;

	return (
		<div className={classes.root}>
			<Tabs value={active} onChange={handleOnChange}>
				{tabs.map((tab) => <Tab key={tab.label} label={tab.label} />)}
			</Tabs>
			<Typography component='div' className={classes.tabConent}>
				{content}
			</Typography>
		</div>
	);
};

export default withStyles(styles)(StateBasedTabs);
