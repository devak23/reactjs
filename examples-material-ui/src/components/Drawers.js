import React, { useState } from 'react';
import { withStyles } from '@material-ui/styles';
import {
	Drawer,
	Radio,
	Button,
	Grid,
	List,
	ListItem,
	ListItemText,
	FormControlLabel,
	RadioGroup
} from '@material-ui/core';
import Header from './widgets/Header';

const styles = (theme) => ({
	root: {
		flexGrow: 1
	},
	flex: {
		flex: 1
	}
});

const Container = (props) => <Grid container {...props} />;
const Item = (props) => <Grid item {...props} />;

const Drawers = ({ classes }) => {
	const [ open, setOpen ] = useState(false);
	const [ variant, setVariant ] = useState('temporary');

	const handleChange = (e) => {
		console.log(e.target.value);
		setVariant(e.target.value);
	};

	return (
		<div className='root'>
			<Header title='Drawers' />
			<Container justify='space-between'>
				<Item>
					<Drawer variant={variant} open={open} onClose={() => setOpen(false)}>
						<List>
							<ListItem button onClick={() => setOpen(false)}>
								<ListItemText>Home</ListItemText>
							</ListItem>
							<ListItem button onClick={() => setOpen(false)}>
								<ListItemText>Page 2</ListItemText>
							</ListItem>
							<ListItem button onClick={() => setOpen(false)}>
								<ListItemText>Page 3</ListItemText>
							</ListItem>
						</List>
					</Drawer>
				</Item>
				<Item>
					<RadioGroup aria-label='drawer options' value={variant} onChange={handleChange} row>
						<FormControlLabel
							label='Temporary'
							value='temporary'
							labelPlacement='top'
							control={<Radio color='primary' />}
						/>
						<FormControlLabel
							label='Permanent'
							value='permanent'
							labelPlacement='top'
							control={<Radio color='primary' />}
						/>
						<FormControlLabel
							label='Persistent'
							value='persistent'
							labelPlacement='top'
							control={<Radio color='primary' />}
						/>
					</RadioGroup>

					<Button onClick={() => setOpen(!open)}>{open ? 'Hide' : 'Show'} Drawer</Button>
				</Item>
			</Container>
			<p>
				The variant property of the drawer determines what type of drawer to render. A permanent drawer is
				always visible and is always in the same place on the screen
			</p>
		</div>
	);
};

export default withStyles(styles)(Drawers);
