import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
	header: {
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between'
	},
	left: {
		marginRight: 'auto'
	},
	right: {
		padding: '20px 0'
	}
});

const Header = ({ classes, title }) => (
	<div className={classes.header}>
		<div className={classes.left}>
			<h3>{title}</h3>
		</div>
		<div className={classes.right}>
			<a href='/'>Home</a>
		</div>
	</div>
);

Header.propTypes = {
	title: PropTypes.string.isRequired
};

export default withStyles(styles)(Header);
