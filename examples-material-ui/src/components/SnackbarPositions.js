import React, { useState } from 'react';
import Header from './widgets/Header';
import { withStyles } from '@material-ui/styles';
import { FormControl, FormLabel, RadioGroup, Radio, FormControlLabel, Snackbar } from '@material-ui/core';

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

const SnackbarPositions = ({ classes }) => {
	const [ vertical, setVertical ] = useState('bottom');
	const [ horizontal, setHorizontal ] = useState('left');

	const handleVerticalChange = (e) => setVertical(e.target.value);

	const handleHorizontalChange = (e) => setHorizontal(e.target.value);

	return (
		<div className={classes.root}>
			<Header title='Snackbar Positions' />
			<div className={classes.content}>
				<FormControl component='fieldset' className={classes.formControl}>
					<FormLabel component='legend'>Vertical</FormLabel>
					<RadioGroup
						name='vertical'
						className={classes.group}
						value={vertical}
						onChange={handleVerticalChange}
					>
						<FormControlLabel value='top' control={<Radio />} label='top' />
						<FormControlLabel value='bottom' control={<Radio />} label='bottom' />
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
		</div>
	);
};

export default withStyles(styles)(SnackbarPositions);
