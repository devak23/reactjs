import React, { useState } from 'react';
import Header from './widgets/Header';
import { withStyles } from '@material-ui/styles';
import { Button, Snackbar } from '@material-ui/core';

const styles = (theme) => ({
	root: {
		flexGrow: 1
	},
	body: {
		width: 350
	}
});

const ShowSnackbar = ({ classes }) => {
	const [ showMessage, setShowMessage ] = useState(false);

	const handleOnClick = () => {
		setShowMessage(true);
		// to make the message disappear, set to false again with a timeout.
		setTimeout(() => {
			setShowMessage(false);
		}, 3000);
	};

	return (
		<div className={classes.root}>
			<Header title='Snackbar' />
			<div className={classes.body}>
				<Button onClick={handleOnClick}>Show Toast Message</Button>
				{showMessage && (
          <Snackbar open={true} message='This is a toast message' ContentProps={{ variant: 'h6' }} />
				)}
			</div>
		</div>
	);
};

export default withStyles(styles)(ShowSnackbar);
