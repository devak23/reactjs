import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';

const styles = (theme) => ({
	root: {
		flexGrow: 1,
		fontSize: 12
	}
});

const Footer = ({ classes, githubPath }) => (
	<div className={classes.root}>
		Source code for this program:{' '}
		<a target='_blank' href={githubPath}>
			Click Here
		</a>
	</div>
);

export default withStyles(styles)(Footer);
