import React, { useState } from 'react';
import { withStyles } from '@material-ui/styles';
import { Tab, Tabs, Typography } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import WebIcon from '@material-ui/icons/Web';
import SettingsIcon from '@material-ui/icons/Settings';
import Footer from './widgets/Footer';
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

const StateBasedTabs = ({ classes, title, githubPath }) => {
	const [ tabs, setTabs ] = useState([
		{
			active: true,
			label: 'Home',
			disabled: false,
			content: 'This is the Home tab',
			icon: <HomeIcon />
		},
		{
			active: false,
			label: 'Internet',
			content: 'This is the Internet Tab',
			disabled: false,
			icon: <WebIcon />
		},
		{
			active: false,
			label: 'Search',
			content: 'This is the Search Tab',
			disabled: false,
			icon: <SearchIcon />
		},
		{
			active: false,
			label: 'Settings',
			content: 'This is the Settings tab',
			disabled: true,
			icon: <SettingsIcon />
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
			<Header title={title} />
			<Tabs value={active} onChange={handleOnChange}>
				{tabs.map((tab) => <Tab key={tab.label} label={tab.label} disabled={tab.disabled} icon={tab.icon} />)}
			</Tabs>
			<Typography component='div' className={classes.tabConent}>
				{content}
			</Typography>
			<Footer githubPath={githubPath} />
		</div>
	);
};

export default withStyles(styles)(StateBasedTabs);
