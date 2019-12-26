import React from 'react';
import { withStyles } from '@material-ui/styles';
import { AppBar, Toolbar, IconButton, Typography, Button, Fade, Grow } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import Footer from './widgets/Footer';

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
				<Grow in={!this.state.scrolling}>
					<AppBar>
						<Toolbar>
							<IconButton className={classes.menuButton} color='inherit' aria-label='Menu'>
								<MenuIcon />
							</IconButton>
							<Typography className={classes.flex} variant='title' color='inherit'>
								<h3>{this.props.title}</h3>
							</Typography>
							<Button color='inherit' onClick={this.handleOnClick}>
								<HomeIcon />
							</Button>
						</Toolbar>
					</AppBar>
				</Grow>
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
			<Footer githubPath={props.githubPath} />
		</div>
	);
};

export default withStyles(styles)(HideOnScroll);
