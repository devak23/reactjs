import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const styles = (theme) => ({
	root: {
		flexGrow: 1
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary
	}
});

const buildGrid = (classes, xsValue, smValue, mdValue) => (
	<Grid container spacing={4}>
		<Grid item xs={xsValue} sm={smValue} md={mdValue}>
			<Paper className={classes.paper}>
				xs={xsValue} sm={smValue} md={mdValue}
			</Paper>
		</Grid>
		<Grid item xs={xsValue} sm={smValue} md={mdValue}>
			<Paper className={classes.paper}>
				xs={xsValue} sm={smValue} md={mdValue}
			</Paper>
		</Grid>
		<Grid item xs={xsValue} sm={smValue} md={mdValue}>
			<Paper className={classes.paper}>
				xs={xsValue} sm={smValue} md={mdValue}
			</Paper>
		</Grid>
		<Grid item xs={xsValue} sm={smValue} md={mdValue}>
			<Paper className={classes.paper}>
				xs={xsValue} sm={smValue} md={mdValue}
			</Paper>
		</Grid>
	</Grid>
);

const UnderstandingBreakPoints = ({ classes }) => (
	<div className={classes.root}>
		<h3>Understanding Breakpoints</h3>
		<p>
			A breakpoint is used by material-ui to determine at what point to break the flow of content on the screen
			and continue on the next line. Depending on the screen width, the following elements will either appear as
			four rows or a 2x2 grid or a line of 4 elements. Try re-sizing the screen and see how the elements get
			re-arranged.
		</p>
		{buildGrid(classes, 12, 6, 3)}
		<p>At extremely small screen (less than 600px), the elements take up one row ie occupy 12 columns.</p>
		<p>
			At small screen (600px and above upto 959px), two elements take up one row comprising a grid of 2x2. So each
			element takes up 6 columns i.e 50%.
		</p>
		<p>At medium screen (960px and above) the elements line up in a single row and each one takes 3 columns </p>
		<p>So this defines the following breakpoints:</p>
		<ul>
			<li>xs >= 0px</li>
			<li>sm >= 600px</li>
			<li>md >= 960px</li>
			<li>lg >= 1280px</li>
			<li>xl >= 1920px</li>
		</ul>
		<p>
			Lets say you wanted each element to occupy 75% of the screen width when small (sm) breakpoint is active. In
			this case, you need to define the sm as 9 (9/12 = 0.75)
		</p>
		{buildGrid(classes, 12, 9, 3)}
		<p>
			Finally if you are unsure of what the width should be, you can use the 'auto' to set the sizes. That will
			look as follows:
		</p>
		{buildGrid(classes, 'auto', 'auto', 'auto')}
	</div>
);

export default withStyles(styles)(UnderstandingBreakPoints);
