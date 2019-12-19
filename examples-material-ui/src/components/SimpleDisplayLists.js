import React, { useState } from 'react';
import { withStyles } from '@material-ui/styles';
import Header from './widgets/Header';
import { List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import WifiRoundedIcon from '@material-ui/icons/WifiRounded';
import NetworkCellIcon from '@material-ui/icons/NetworkCell';

const styles = (theme) => ({
	root: {
		flexGrow: 1
	}
});

const SimpleDisplayLists = ({ classes }) => {
	const [ items, setItems ] = useState([
		{ name: 'Account', timestamp: new Date(), Icon: <AccountCircleIcon /> },
		{ name: 'Wi-Fi & Internet', timestamp: new Date(), Icon: <WifiRoundedIcon /> },
		{ name: 'Mobile data', timestamp: new Date(), Icon: <NetworkCellIcon /> }
	]);

	const handleOnClick = (index) => () => {
		const item = items[index];
		const newItems = [ ...items ];

		newItems[index] = { ...item, selected: !item.selected };
		setItems(newItems);
	};

	return (
		<div className={classes.root}>
			<Header title='Simple Display Lists' />
			<List>
				{items.map((item, index) => (
					<ListItem key={index} button dense selected={item.selected} onClick={handleOnClick(index)}>
						<ListItemIcon>{item.Icon}</ListItemIcon>
						<ListItemText
							primary={item.name}
							secondary={item.timestamp.toLocaleString()}
							primaryTypographyProps={{ color: item.selected ? 'primary' : undefined }}
						/>
					</ListItem>
				))}
			</List>
		</div>
	);
};

export default withStyles(styles)(SimpleDisplayLists);
