import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	root: {
		height: '100%',
		backgroundColor: 'ivory'
	}
});

const Mouse = ({ render }) => {
	const [ point, setPoint ] = useState({ x: 0, y: 0 });

	const handleMouseMove = ({ clientX, clientY }) => {
		setPoint({ x: clientX, y: clientY });
	};

	const classes = useStyles();

	return (
		<div className={classes.root} onMouseMove={handleMouseMove}>
			{render(point)}
		</div>
	);
};

Mouse.propTypes = {
	render: PropTypes.func.isRequired
};

export default Mouse;
