import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/styles';
import { MenuItem, Button, AppBar, Toolbar, IconButton, Menu, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const styles = (theme) => ({
	root: {
		flexGrow: 1
	},
	flex: {
		flex: 1
	},
	toolbarMargin: theme.mixins.toolbar,
	menuButton: {
		marginRight: -12,
		marginLeft: 20
	}
});

const MyToolbar = withStyles(styles)(
	class extends Component {
		static defaultProps = {
			MenuItems: ({ closeMenu, navigateHome }) => (
				<Fragment>
					<MenuItem onClick={closeMenu}>Profile</MenuItem>
					<MenuItem onClick={closeMenu}>My Account</MenuItem>
					<MenuItem onClick={closeMenu}>Logout</MenuItem>
					<MenuItem onClick={navigateHome}>Home</MenuItem>
				</Fragment>
			),
			RightButton: ({ navigateHome }) => (
				<Button color='inherit' onClick={navigateHome}>
					Home
				</Button>
			)
		};

		state = { anchor: null };

		closeMenu = () => this.setState({ anchor: null });

		navigateHome = () => this.props.history.push('/');

		render = () => {
			const { classes, title, MenuItems, RightButton } = this.props;
			return (
				<Fragment>
					<AppBar>
						<Toolbar>
							<IconButton
								className={classes.menuButton}
								color='inherit'
								aria-label='Menu'
								onClick={(e) => this.setState({ anchor: e.currentTarget })}
							>
								<MenuIcon />
							</IconButton>
							<Menu
								anchorEL={this.state.anchor}
								open={Boolean(this.state.anchor)}
								onClose={this.closeMenu}
							>
								<MenuItems closeMenu={this.closeMenu} navigateHome={this.navigateHome} />
							</Menu>
							<Typography variant={title} color='inherit' className={classes.flex}>
								{title}
							</Typography>
							<RightButton navigateHome={this.navigateHome} />
						</Toolbar>
					</AppBar>
					<div className={classes.toolbarMargin} />
				</Fragment>
			);
		};
	}
);

const ToolbarAbstraction = ({ classes, ...props }) => {
	return (
		<div className={classes.root}>
			<MyToolbar {...props} />
		</div>
	);
};

export default withStyles(styles)(ToolbarAbstraction);
