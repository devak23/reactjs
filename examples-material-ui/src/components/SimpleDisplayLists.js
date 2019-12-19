import React, { useState } from 'react';
import { withStyles } from '@material-ui/styles';
import Header from './widgets/Header';
import { List, ListItem, ListItemText } from '@material-ui/core';

const styles = (theme) => ({
	root: {
		flexGrow: 1
	}
});

const SimpleDisplayLists = ({ classes }) => {
	const [ items, setItems ] = useState([
		{ name: 'Cash Position', timestamp: new Date() },
		{ name: 'Transaction Status', timestamp: new Date() },
		{ name: 'Liquidity', timestamp: new Date() }
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
