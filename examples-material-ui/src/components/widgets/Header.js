import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
	header: {
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between',
		backgroundColor: '#e2d7d5',
		border: '1px solid #CFC2BF'
	},
	left: {
		marginRight: 'auto',
		padding: '0 5px'
	},
	right: {
		marginLeft: 'auto',
		padding: '20px 5px'
	}
});

const Header = ({ classes, title, hideHome }) => (
	<div className={classes.header}>
		<div className={classes.left}>
			<h3>{title}</h3>
		</div>
		<div className={classes.right}>{!hideHome && <a href='/'>Home</a>}</div>
	</div>
);

Header.propTypes = {
	title: PropTypes.string.isRequired,
	hideHome: PropTypes.bool
};

export default withStyles(styles)(Header);
