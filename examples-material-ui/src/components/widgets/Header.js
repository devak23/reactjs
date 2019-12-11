import React from 'react';
import PropTypes from 'prop-types';
import HomeIcon from '@material-ui/icons/Home';
import { green } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
	header: {
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between',
		backgroundColor: '#f7f6e7',
		border: '1px solid #dfddc5'
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
		<div className={classes.right}>
			{!hideHome && (
				<a href='/'>
					<HomeIcon style={{ color: green[700] }} />
				</a>
			)}
		</div>
	</div>
);

Header.propTypes = {
	title: PropTypes.string.isRequired,
	hideHome: PropTypes.bool
};

export default withStyles(styles)(Header);
