import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';

const styles = (theme) => ({
	root: {
		marginTop: 15,
		flexGrow: 1,
		fontSize: 12
	}
});

const Footer = ({ classes, githubPath }) => (
	<div className={classes.root}>
		To view the source code for this program,{' '}
		<a target='_blank' href={githubPath}>
			click here.
		</a>
	</div>
);

export default withStyles(styles)(Footer);
