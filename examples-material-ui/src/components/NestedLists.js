import React, { useState, Fragment } from 'react';
import Header from './widgets/Header';
import { withStyles } from '@material-ui/styles';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InboxIcon from '@material-ui/icons/Inbox';
import MailIcon from '@material-ui/icons/Mail';
import ContactsIcon from '@material-ui/icons/Contacts';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import { List, ListItem, ListItemIcon, ListItemText, Collapse } from '@material-ui/core';

const styles = (theme) => ({
	root: {
		flexGrow: 1
	},
	content: {
		width: 250
	}
});

const ExpandedIcon = ({ expanded }) => (expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />);

const NestedLists = ({ classes }) => {
	const [ items, setItems ] = useState([
		{
			name: 'Messages',
			Icon: InboxIcon,
			expanded: false,
			children: [ { name: 'First Message', Icon: MailIcon }, { name: 'Second Message', Icon: MailIcon } ]
		},
		{
			name: 'Contacts',
			Icon: ContactsIcon,
			expanded: false,
			children: [
				{ name: 'First Contact', Icon: ContactMailIcon },
				{ name: 'Second Contact', Icon: ContactMailIcon }
			]
		}
	]);

	const handleOnClick = (index) => () => {
		const newItems = [ ...items ];
		const item = items[index];
		newItems[index] = { ...item, expanded: !item.expanded };
		setItems(newItems);
	};

	return (
		<div className={classes.root}>
			<Header title='Nested Lists' />
			<div className={classes.content}>
				<List>
					{items.map(({ Icon, ...item }, index) => (
						<Fragment key={index}>
							<ListItem button onClick={handleOnClick(index)}>
								<ListItemIcon>
									<Icon />
								</ListItemIcon>
								<ListItemText primary={item.name} />
								<ExpandedIcon expanded={item.expanded} />
							</ListItem>
							<Collapse in={item.expanded}>
								{item.children.map((item, index) => (
									<ListItem key={item.name} button dense>
										<ListItemIcon>
											<item.Icon />
										</ListItemIcon>
										<ListItemText primary={item.name} />
									</ListItem>
								))}
							</Collapse>
						</Fragment>
					))}
				</List>
			</div>
		</div>
	);
};

export default withStyles(styles)(NestedLists);
