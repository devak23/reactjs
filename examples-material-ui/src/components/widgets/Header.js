import React from 'react';
import PropTypes from 'prop-types';
import ArrowBack from '@material-ui/icons/ArrowBack';
import ArrowForward from '@material-ui/icons/ArrowForward';
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
		padding: 15
	},
	buttonBar: {
		margin: '0 5px'
	}
});

const Header = ({ classes, title, hideHome, hideForward, hideBack }) => (
	<div className={classes.header}>
		<div className={classes.left}>
			<h3>{title}</h3>
		</div>
		<div className={classes.right}>
			{!hideBack && (
				<a href='/' className={classes.buttonBar}>
					<ArrowBack style={{ color: green[700] }} />
				</a>
			)}

			{!hideForward && (
				<a href='/' className={classes.buttonBar}>
					<ArrowForward style={{ color: green[700] }} />
				</a>
			)}

			{!hideHome && (
				<a href='/' className={classes.buttonBar}>
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
