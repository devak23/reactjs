import React, { useState } from 'react';
import Header from './widgets/Header';
import { withStyles } from '@material-ui/styles';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import LowPriorityIcon from '@material-ui/icons/LowPriority';
import MarkunreadIcon from '@material-ui/icons/Markunread';
import DeleteIcon from '@material-ui/icons/Delete';
import { List, ListItem, Avatar, ListItemText, ListItemIcon, Badge } from '@material-ui/core';
import clsx from 'clsx';

const styles = (theme) => ({
	root: {
		flexGrow: 1
	},
	activeAvatar: {
		backgroundColor: theme.palette.primary[theme.palette.type]
	}
});

const AvatarsAndTexts = ({ classes }) => {
	const [ items, setItems ] = useState([
		{
			name: 'Unread',
			updated: '2 mins ago',
			Icon: MarkunreadIcon,
			notifications: 1
		},
		{
			name: 'High Priority',
			updated: '30 mins ago',
			Icon: PriorityHighIcon
		},
		{
			name: 'Low Priority',
			updated: '3 hours ago',
			Icon: LowPriorityIcon
		},
		{
			name: 'Junk',
			updated: '6 days ago',
			Icon: DeleteIcon
		}
	]);
	return (
		<div className={classes.root}>
			<Header title='Avatars and Texts' />
			<List>
				{items.map(({ Icon, ...item }, index) => (
					<ListItem button>
						<ListItemIcon>
							<Badge
								color={item.notifications ? 'secondary' : undefined}
								badgeContent={item.notifications ? item.notifications : null}
							>
								<Avatar className={clsx({ [classes.activeAvatar]: item.notifications })}>
									<Icon />
								</Avatar>
							</Badge>
						</ListItemIcon>
						<ListItemText primary={item.name} secondary={item.updated} />
					</ListItem>
				))}
			</List>
		</div>
	);
};

export default withStyles(styles)(AvatarsAndTexts);
