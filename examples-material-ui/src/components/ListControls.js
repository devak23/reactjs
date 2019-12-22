import React, { useState } from 'react';
import Header from './widgets/Header';
import { withStyles } from '@material-ui/styles';
import DevicesIcon from '@material-ui/icons/Devices';
import BluetoothIcon from '@material-ui/icons/Bluetooth';
import BluetoothDisabledIcon from '@material-ui/icons/BluetoothDisabled';
import { List, ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';

const styles = (theme) => ({
	root: {
		flexGrow: 1
	},
	content: {
		width: 350
	}
});

const ListControls = ({ classes }) => {
	const [ items, setItems ] = useState([
		{
			name: 'OnePlus 5',
			bluetooth: true,
			Icon: DevicesIcon
		},
		{
			name: 'Google Pixel',
			bluetooth: true,
			Icon: DevicesIcon
		},
		{
			name: 'iPhone 11',
			bluetooth: true,
			Icon: DevicesIcon
		}
	]);

	const handleOnClick = (index) => () => {
		const newItems = [ ...items ];
		const item = items[index];
		newItems[index] = { ...item, bluetooth: !item.bluetooth };
		setItems(newItems);
	};

	const MaybeBluetoothIcon = ({ bluetooth }) => (bluetooth ? <BluetoothIcon /> : <BluetoothDisabledIcon />);

	return (
		<div className='root'>
			<Header title='List Controls' />
			<div className={classes.content}>
				<List>
					{items.map(({ Icon, ...item }, index) => (
						<ListItem key={index} button onClick={handleOnClick(index)}>
							<ListItemIcon>
								<Icon />
							</ListItemIcon>
							<ListItemText primary={item.name} />
							<ListItemSecondaryAction>
								<IconButton onClick={handleOnClick(index)}>
									<MaybeBluetoothIcon bluetooth={item.bluetooth} />
								</IconButton>
							</ListItemSecondaryAction>
						</ListItem>
					))}
				</List>
			</div>
		</div>
	);
};

export default withStyles(styles)(ListControls);
