import React, { useState } from 'react';
import Header from './widgets/Header';
import { withStyles } from '@material-ui/styles';
import { Grid, Button, Snackbar, Slide, Grow, Fade } from '@material-ui/core';
import Footer from './widgets/Footer';

const styles = (theme) => ({
	root: {
		flexGrow: 1
	},
	content: {
		marginTop: 50,
		width: 350
	}
});

const MySnackbar = ({ transition, direction, ...rest }) => (
	<Snackbar
		TransitionComponent={{ slide: Slide, grow: Grow, fade: Fade }[transition]}
		TransitionProps={{ direction }}
		{...rest}
	/>
);

const SnackbarTransitions = ({ classes, title, githubPath }) => {
	const [ first, setFirst ] = useState(false);
	const [ second, setSecond ] = useState(false);
	const [ third, setThird ] = useState(false);
	const [ fourth, setFourth ] = useState(false);

	return (
		<div className={classes.root}>
			<Header title={title} />
			<div className={classes.content}>
				<Grid container spacing={8}>
					<Grid item>
						<Button variant='contained' onClick={() => setFirst(true)}>
							Slide Down
						</Button>
					</Grid>
					<Grid item>
						<Button variant='contained' onClick={() => setSecond(true)}>
							Slide Up
						</Button>
					</Grid>
					<Grid item>
						<Button variant='contained' onClick={() => setThird(true)}>
							Grow
						</Button>
					</Grid>
					<Grid item>
						<Button variant='contained' onClick={() => setFourth(true)}>
							Fade
						</Button>
					</Grid>
				</Grid>

				<MySnackbar
					open={first}
					onClose={() => setFirst(false)}
					autoHideDuration={5000}
					message='Slide Down'
					transition='slide'
					direction='down'
				/>
				<MySnackbar
					open={second}
					onClose={() => setSecond(false)}
					autoHideDuration={5000}
					message='Slide Up'
					transition='slide'
					direction='up'
				/>
				<MySnackbar
					open={third}
					onClose={() => setThird(false)}
					autoHideDuration={5000}
					message='Grow'
					transition='grow'
				/>
				<MySnackbar
					open={fourth}
					onClose={() => setFourth(false)}
					autoHideDuration={5000}
					message='Fade'
					transition='fade'
				/>
			</div>
			<Footer githubPath={githubPath} />
		</div>
	);
};

export default withStyles(styles)(SnackbarTransitions);
