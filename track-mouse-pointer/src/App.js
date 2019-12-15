import React from 'react';
import Mouse from './components/Mouse';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	root: {
		height: 630,
		backgroundColor: 'blue'
	}
});

const App = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Mouse
				render={({ x, y }) => (
					<h3>
						Mouse position: ({x}, {y})
					</h3>
				)}
			/>
		</div>
	);
};

export default App;
