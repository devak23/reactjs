import React from 'react';
import { withStyles } from '@material-ui/styles';
import Header from './widgets/Header';
import { List, ListItem, ListItemText, Typography } from '@material-ui/core';

const styles = (theme) => ({
	root: {
		flexGrow: 1
	},
	content: {
		width: 250,
		padding: 10,
		border: '1px solid #eee'
	}
});

const ListSections = ({ classes }) => (
	<div className={classes.root}>
		<Header title='List Sections' />
		<div className={classes.content}>
			<Typography variant='h6'>First Section</Typography>
			<List>
				<ListItem button>
					<ListItemText primary='First' />
				</ListItem>
				<ListItem button>
					<ListItemText primary='Second' />
				</ListItem>
			</List>
			<Typography variant='h6'>Second Section</Typography>
			<List>
				<ListItem button>
					<ListItemText primary='Third' />
				</ListItem>
				<ListItem button>
					<ListItemText primary='Fourth' />
				</ListItem>
				<ListItem button>
					<ListItemText primary='Fifth' />
				</ListItem>
			</List>
			<Typography variant='h6'>Third Section</Typography>
			<List>
				<ListItem button>
					<ListItemText primary='Sixth' />
				</ListItem>
			</List>
		</div>
	</div>
);

export default withStyles(styles)(ListSections);
