import React from 'react';
import { withStyles } from '@material-ui/styles';
import { AppBar, Toolbar, IconButton, Typography, Button, Fade } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const styles = (theme) => ({
	root: {
		flexGrow: 1
	},
	flex: {
		flex: 1
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20
	},
	toolbarMargin: theme.mixins.toolbar
});

const ScrolledAppBar = withStyles(styles)(
	class extends React.Component {
		state = {
			scrolling: false,
			scrollTop: 0
		};

		componentDidMount = () => window.addEventListener('scroll', this.onScroll);

		componentWillUnmount = () => window.removeEventListener('scroll', this.onScroll);

		shouldComponentUpdate = (props, state) => this.state.scrolling !== state.scrolling;

		onScroll = (e) => {
			this.setState((oldState) => ({
				scrollTop: e.target.documentElement.scrollTop,
				scrolling: e.target.documentElement.scrollTop > oldState.scrollTop
			}));
		};

		handleOnClick = (e) => this.props.history.push('/');

		render() {
			const { classes } = this.props;
			return (
				<Fade in={!this.state.scrolling}>
					<AppBar>
						<Toolbar>
							<IconButton className={classes.menuButton} color='inherit' aria-label='Menu'>
								<MenuIcon />
							</IconButton>
							<Typography className={classes.flex} variant='title' color='inherit'>
								<h3>Hide On Scroll</h3>
							</Typography>
							<Button color='inherit' onClick={this.handleOnClick}>
								<ExitToAppIcon />
							</Button>
						</Toolbar>
					</AppBar>
				</Fade>
			);
		}
	}
);

const HideOnScroll = (props) => {
	return (
		<div className={props.classes.root}>
			<ScrolledAppBar {...props} />
			<div className={props.classes.toolbarMargin} />
			<ul>{new Array(500).fill(null).map((v, i) => <li key={i}>{i}</li>)}</ul>
		</div>
	);
};

export default withStyles(styles)(HideOnScroll);
