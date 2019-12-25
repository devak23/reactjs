import React, { useState } from 'react';
import Header from './widgets/Header';
import { withStyles } from '@material-ui/styles';
import { List, ListItem, ListItemText, Typography } from '@material-ui/core';
import { List as VirtualList, AutoSizer } from 'react-virtualized';

const styles = (theme) => ({
	root: {
		flexGrow: 1
	},
	body: {
		width: 350
	},
	list: {
		height: 300
	},
	paper: {
		margin: theme.spacing(3)
	}
});

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
function* generateItems() {
	for (let i = 1; i <= 1000; i++) {
		yield `Item ${i}`;
	}
}

const ScrollingLists = ({ classes }) => {
	const [ items ] = useState([ ...generateItems() ]);

	const rowRenderer = ({ index, isScrolling, key, style }) => {
		const item = items[index];
		return (
			<ListItem button key={key} style={style}>
				<ListItemText primary={isScrolling ? '...' : item} />
			</ListItem>
		);
	};

	return (
		<div className={classes.root}>
			<Header title='Scrolling Lists' />
			<div className={classes.body}>
				<Typography>List of 1000 lazily loaded Items</Typography>
				<List className={classes.list}>
					<AutoSizer>
						{({ width }) => (
							<VirtualList
								width={width}
								height={300}
								rowHeight={50}
								rowCount={items.length}
								rowRenderer={rowRenderer}
							/>
						)}
					</AutoSizer>
				</List>
			</div>
		</div>
	);
};

export default withStyles(styles)(ScrollingLists);
