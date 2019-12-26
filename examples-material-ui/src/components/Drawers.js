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
	RadioGroup,
	Typography,
	ListItemIcon
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import WebIcon from '@material-ui/icons/Web';
import Header from './widgets/Header';
import Footer from './widgets/Footer';

const styles = (theme) => ({
	root: {
		flexGrow: 1
	},
	flex: {
		flex: 1
	},
	paper: {
		padding: theme.spacing(2)
	}
});

const Container = (props) => <Grid container {...props} />;
const Item = (props) => <Grid item {...props} />;

const Drawers = ({ classes, title, githubPath }) => {
	const [ open, setOpen ] = useState(false);
	const [ variant, setVariant ] = useState('temporary');
	const [ content, setContent ] = useState('Home');
	const [ items, setItems ] = useState([
		{ label: 'Home', Icon: HomeIcon },
		{ label: 'Page 2', Icon: WebIcon },
		{ label: 'Page 3', Icon: WebIcon, disabled: true },
		{ label: 'Page 4', Icon: WebIcon },
		{ label: 'Page 5', Icon: WebIcon, hidden: true }
	]);

	const handleChange = (e) => {
		setVariant(e.target.value);
	};

	const ListItems = ({ items, onClick }) =>
		items.filter(({ hidden }) => !hidden).map(({ label, disabled, Icon }, index) => (
			<ListItem button key={index} disabled={disabled} onClick={onClick(label)}>
				<ListItemIcon>
					<Icon />
				</ListItemIcon>
				<ListItemText>{label}</ListItemText>
			</ListItem>
		));

	const onClick = (content) => () => {
		setOpen(false);
		setContent(content);
	};

	return (
		<div className='root'>
			<Header title={title} />
			<Container justify='space-between'>
				<Item>
					<Drawer variant={variant} open={open} onClose={() => setOpen(false)}>
						<List>
							<ListItems items={items} onClick={onClick} />
						</List>
					</Drawer>
				</Item>
				<Item>
					<RadioGroup aria-label='drawer options' value={variant} onChange={handleChange} row>
						<FormControlLabel
							label='Temporary'
							value='temporary'
							labelPlacement='top'
							control={<Radio color='secondary' />}
						/>
						<FormControlLabel
							label='Permanent'
							value='permanent'
							labelPlacement='top'
							control={<Radio color='secondary' />}
						/>
						<FormControlLabel
							label='Persistent'
							value='persistent'
							labelPlacement='top'
							control={<Radio color='secondary' />}
						/>
					</RadioGroup>

					<Button onClick={() => setOpen(!open)}>{open ? 'Hide' : 'Show'} Drawer</Button>
				</Item>
			</Container>
			<Typography>
				The variant property of the drawer determines what type of drawer to render. A permanent drawer is
				always visible and is always in the same place on the screen.
			</Typography>
			<Footer githubPath={githubPath} />
		</div>
	);
};

export default withStyles(styles)(Drawers);
