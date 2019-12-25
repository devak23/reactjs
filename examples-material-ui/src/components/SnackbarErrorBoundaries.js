import React, { Fragment } from 'react';
import Header from './widgets/Header';
import { withStyles } from '@material-ui/styles';
import { Snackbar, Typography } from '@material-ui/core';

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
	}
});

const ErrorBoundary = withStyles(styles)(
	class extends React.Component {
		state = {
			error: null
		};

		handleClose = () => this.setState({ error: null });

		componentDidCatch(error) {
			this.setState({ error });
		}

		render() {
			const { classes } = this.props;
			return (
				<Fragment>
					{this.state.error === null && this.props.children}
					<Snackbar
						open={Boolean(this.state.error)}
						message={this.state.error !== null && this.state.error.toString()}
						ContentProps={{ classes: { root: classes.error } }}
					/>
				</Fragment>
			);
		}
	}
);

const FaultyButton = () => {
	throw new Error('You opened a faulty page');
};

const SnackbarErrorBoundaries = ({ classes }) => {
	return (
		<div className={classes.root}>
			<Header title='Error Boundary' />
			<div className={classes.content}>
				<ErrorBoundary>
					<FaultyButton />
				</ErrorBoundary>
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
      <FaultyButton />
    </ErrorBoundary>
            `}
					</code>
				</pre>
				<Typography>
					Here the 'FaultyButton' is used to generate the error, but, in real life, the children enclosed
					within the ErrorBoundary could generate the error.
				</Typography>
			</div>
		</div>
	);
};

export default withStyles(styles)(SnackbarErrorBoundaries);
