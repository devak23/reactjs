import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, Button } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import WebIcon from '@material-ui/icons/Web';
import Header from './widgets/Header';
import Footer from './widgets/Footer';

const styles = (theme) => ({
	root: {
		flexGrow: 1
	},
	alignContent: {
		alignSelf: 'center'
	}
});

const Container = (props) => <Grid container {...props} />;
const Item = (props) => <Grid item {...props} />;
const ListMenuItem = ({ path, Icon, text, onClick }) => (
	<ListItem component={Link} to={path} onClick={() => onClick(false)}>
		<ListItemIcon>
			<Icon />
		</ListItemIcon>
		<ListItemText>{text}</ListItemText>
	</ListItem>
);

const DrawerWithNavigation = ({ classes, title, githubPath }) => {
	const [ open, setOpen ] = useState(false);

	return (
		<div className='root'>
			<Header title={title} />
			<Container justify='space-between'>
				<Item className={classes.alignContent}>
					<Route exact path='/drawerwithnavigation' render={() => <Typography>Home</Typography>} />
					<Route exact path='/navpage2' render={() => <Typography>Page2</Typography>} />
					<Route exact path='/navpage3' render={() => <Typography>Page3</Typography>} />
				</Item>
				<Item>
					<Drawer className={classes.drawerWidth} open={open} onClose={() => setOpen(false)}>
						<List>
							<ListItem component={Link} to={'/drawerwithnavigation'} onClick={() => setOpen(false)}>
								<ListItemIcon>
									<HomeIcon />
								</ListItemIcon>
								<ListItemText>Home</ListItemText>
							</ListItem>

							<ListItem component={Link} to={'/navpage2'} onClick={() => setOpen(false)}>
								<ListItemIcon>
									<WebIcon />
								</ListItemIcon>
								<ListItemText>Page 2</ListItemText>
							</ListItem>

							<ListItem component={Link} to={'/navpage3'} onClick={() => setOpen(false)}>
								<ListItemIcon>
									<WebIcon />
								</ListItemIcon>
								<ListItemText>Text Page 3</ListItemText>
							</ListItem>
						</List>
					</Drawer>
				</Item>
				<Item>
					<Button onClick={() => setOpen(!open)}>{open ? 'Hide' : 'Show'} Drawer</Button>
				</Item>
			</Container>
			<Footer githubPath={githubPath} />
		</div>
	);
};

export default withStyles(styles)(DrawerWithNavigation);
