import React from 'react';
import Header from './widgets/Header';
import { withStyles } from '@material-ui/styles';

const styles = (theme) => ({
	root: {
		flexGrow: 1
	},
	content: {
		width: 350
	}
});

const SnackbarPositions = ({ classes }) => {
	return (
		<div className={classes.root}>
			<Header title='Snackbar Positions' />
			<div className={classes.content} />
		</div>
	);
};

export default withStyles(styles)(SnackbarPositions);
