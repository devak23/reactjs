import React, { Fragment } from 'react';
import Header from './widgets/Header';
import { withStyles } from '@material-ui/styles';
import { Snackbar, Typography, Button, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const styles = (theme) => ({
	root: {
		flexGrow: 1
	},
	content: {
		width: 700
	},
	error: {
		backgroundColor: theme.palette.error.main,
		color: theme.palette.error.constrastText
	},
	button: {
		background: theme.palette.primary
	}
});

const ErrorBoundary = withStyles(styles)(
	class extends React.Component {
		state = {
			error: null,
			open: false
		};

		handleClose = () => this.setState({ error: null, open: false });

		componentDidCatch(error) {
			this.setState({ error: error, open: true });
		}

		handleCloseSnackbar = () => this.setState({ error: this.state.error, open: false });

		render() {
			const { classes } = this.props;
			return (
				<Fragment>
					{this.state.error === null && this.props.children}
					<Snackbar
						open={this.state.open}
						message={this.state.error !== null && this.state.error.toString()}
						ContentProps={{ classes: { root: classes.error } }}
						action={[
							<IconButton color='inherit' onClick={this.handleCloseSnackbar}>
								<CloseIcon />
							</IconButton>
						]}
					/>
				</Fragment>
			);
		}
	}
);

const MyButton = ({ label, throwError }) => {
	if (throwError) {
		throw new Error('Page not loaded. Error found while processing the page.');
	} else {
		return <Button>{label}</Button>;
	}
};

const SnackbarErrorBoundaries = ({ classes }) => {
	return (
		<div className={classes.root}>
			<Header title='Error Boundary' />
			<div className={classes.content}>
				<Typography>
					The componentDidCatch() life-cycle method captures the error and sets the state of the ErrorBoundary
					component, which then displays the Snackbar component with the appropriate message. The error state
					is used to decide to open the snackbar component. When no error is present, the children are
					displayed. This is the way the "try-catch" ErrorBoundary component is used
				</Typography>
				<pre>
					<code>
						{`
		<ErrorBoundary>
			<MyButton label='Good Button' />
		</ErrorBoundary>
		<ErrorBoundary>
			<MyButton label='Yet another Good Button' throwError />
		</ErrorBoundary>		
            `}
					</code>
				</pre>
				<Typography>
					Here the 'MyButton' is used to generate the error, but, in real life, the children enclosed within
					the ErrorBoundary could generate the error. The ContentProps property on the Snackbar is used to
					style the Snackbar to make it look like an error which uses the background and color values from the
					theme.
				</Typography>
				<ErrorBoundary>
					<MyButton label='Good Component' />
				</ErrorBoundary>
				<ErrorBoundary>
					<MyButton label='Yet another Good Button' throwError />
				</ErrorBoundary>
			</div>
		</div>
	);
};

export default withStyles(styles)(SnackbarErrorBoundaries);
