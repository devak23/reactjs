import React from 'react';
import { withStyles } from '@material-ui/styles';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import Footer from './widgets/Footer';

const styles = (theme) => ({
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20
	},
	flex: {
		flex: 1
	},
	toolbarMargin: theme.mixins.toolbar
});

const FixedPositionBar = ({ classes, history, title, githubPath }) => {
	const handleClick = (event) => history.push('/');
	return (
		<div className={classes.root}>
			<AppBar position='fixed'>
				<Toolbar>
					<IconButton color='inherit' aria-label='Menu' className={classes.menuButton}>
						<MenuIcon />
					</IconButton>
					<Typography variant='title' color='inherit' className={classes.flex}>
						<h3>{title}</h3>
					</Typography>
					<Button color='inherit' onClick={handleClick}>
						<HomeIcon />
					</Button>
				</Toolbar>
			</AppBar>
			<div className={classes.toolbarMargin} />
			<ul>{new Array(500).fill(null).map((v, i) => <li key={i}>{i}</li>)}</ul>
			<Footer githubPath={githubPath} />
		</div>
	);
};

export default withStyles(styles)(FixedPositionBar);
