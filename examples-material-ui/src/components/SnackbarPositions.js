import React, { useState } from 'react';
import Header from './widgets/Header';
import { withStyles } from '@material-ui/styles';
import { FormControl, FormLabel, RadioGroup, Radio, FormControlLabel, Snackbar, Typography } from '@material-ui/core';
import Footer from './widgets/Footer';

const styles = (theme) => ({
	root: {
		flexGrow: 1
	},
	content: {
		width: 350
	},
	formControl: {
		margin: theme.spacing(3)
	}
});

const SnackbarPositions = ({ classes, title, githubPath }) => {
	const [ vertical, setVertical ] = useState('top');
	const [ horizontal, setHorizontal ] = useState('center');

	const handleVerticalChange = (e) => setVertical(e.target.value);

	const handleHorizontalChange = (e) => setHorizontal(e.target.value);

	return (
		<div className={classes.root}>
			<Header title={title} />
			<div className={classes.content}>
				<FormControl component='fieldset' className={classes.formControl}>
					<FormLabel component='legend'>Vertical</FormLabel>
					<RadioGroup
						name='vertical'
						className={classes.group}
						value={vertical}
						onChange={handleVerticalChange}
					>
						<FormControlLabel value='top' control={<Radio />} label='Top' />
						<FormControlLabel value='bottom' control={<Radio />} label='Bottom' />
					</RadioGroup>
				</FormControl>
				<FormControl component='fieldset' className={classes.formControl}>
					<FormLabel component='legend'>Horizontal</FormLabel>
					<RadioGroup
						name='horizontal'
						className={classes.group}
						value={horizontal}
						onChange={handleHorizontalChange}
					>
						<FormControlLabel value='left' control={<Radio />} label='Left' />
						<FormControlLabel value='center' control={<Radio />} label='Center' />
						<FormControlLabel value='Right' control={<Radio />} label='Right' />
					</RadioGroup>
				</FormControl>
				<Snackbar anchorOrigin={{ vertical, horizontal }} open={true} message='Positioned snackbar' />
			</div>
			<Typography>The code that actually positions the snackbar is: </Typography>
			<pre>
				{`<Snackbar anchorOrigin={{ vertical, horizontal }} open={true} message='Positioned snackbar' />`}
			</pre>
			<Typography>
				{'...'}
				where the values of the anchorOrigin values for vertical and horizontal are any one of (top, bottom) and
				(left, center and right) respectively
			</Typography>
			<Footer githubPath={githubPath} />
		</div>
	);
};

export default withStyles(styles)(SnackbarPositions);
