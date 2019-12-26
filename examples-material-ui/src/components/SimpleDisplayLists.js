import React, { useState } from 'react';
import { withStyles } from '@material-ui/styles';
import Header from './widgets/Header';
import Footer from './widgets/Footer';
import { List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import WifiRoundedIcon from '@material-ui/icons/WifiRounded';
import NetworkCellIcon from '@material-ui/icons/NetworkCell';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const styles = (theme) => ({
	root: {
		flexGrow: 1
	}
});

const MaybeSelectedIcon = ({ selected, Icon }) => (selected ? <CheckCircleIcon /> : <Icon />);

const SimpleDisplayLists = ({ classes, title, githubPath }) => {
	const [ items, setItems ] = useState([
		{ name: 'Account', timestamp: new Date(), icon: AccountCircleIcon },
		{ name: 'Wi-Fi & Internet', timestamp: new Date(), icon: WifiRoundedIcon },
		{ name: 'Mobile data', timestamp: new Date(), icon: NetworkCellIcon }
	]);

	const handleOnClick = (index) => () => {
		const item = items[index];
		const newItems = [ ...items ];

		newItems[index] = { ...item, selected: !item.selected };
		setItems(newItems);
	};

	return (
		<div className={classes.root}>
			<Header title={title} />
			<List>
				{items.map((item, index) => (
					<ListItem key={index} button dense selected={item.selected} onClick={handleOnClick(index)}>
						<ListItemText
							primary={item.name}
							secondary={item.timestamp.toLocaleString()}
							primaryTypographyProps={{ color: item.selected ? 'primary' : undefined }}
						/>
						<ListItemIcon>
							<MaybeSelectedIcon selected={item.selected} Icon={item.icon} />
						</ListItemIcon>
					</ListItem>
				))}
			</List>
			<Footer githubPath={githubPath} />
		</div>
	);
};

export default withStyles(styles)(SimpleDisplayLists);
