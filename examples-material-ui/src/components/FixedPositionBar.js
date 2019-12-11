import React from 'react';
import { withStyles } from '@material-ui/styles';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

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

const FixedPositionBar = ({ classes, history }) => {
	const handleClick = (event) => history.push('/');
	return (
		<div className={classes.root}>
			<AppBar position='fixed'>
				<Toolbar>
					<IconButton color='inherit' aria-label='Menu' className={classes.menuButton}>
						<MenuIcon />
					</IconButton>
					<Typography variant='title' color='inherit' className={classes.flex}>
						<h3>Fixed Position Bar</h3>
					</Typography>
					<Button color='inherit' onClick={handleClick}>
						<ExitToAppIcon />
					</Button>
				</Toolbar>
			</AppBar>
			<div className={classes.toolbarMargin} />
			<ul>{new Array(500).fill(null).map((v, i) => <li key={i}>{i}</li>)}</ul>
		</div>
	);
};

export default withStyles(styles)(FixedPositionBar);
