import React from 'react';
import Header from './widgets/Header';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

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

const Container = (props) => <Grid container {...props} />;
const Item = (props) => <Grid item {...props} />;

const buildGrid = (classes, width) => (
	<Container spacing={4}>
		<Item xs={width}>
			<Paper className={classes.paper}>xs={width}</Paper>
		</Item>
		<Item xs={width}>
			<Paper className={classes.paper}>xs={width}</Paper>
		</Item>
		<Item xs={width}>
			<Paper className={classes.paper}>xs={width}</Paper>
		</Item>
		<Item xs={width}>
			<Paper className={classes.paper}>xs={width}</Paper>
		</Item>
		<Item xs={width}>
			<Paper className={classes.paper}>xs={width}</Paper>
		</Item>
		<Item xs={width}>
			<Paper className={classes.paper}>xs={width}</Paper>
		</Item>
		<Item xs={width}>
			<Paper className={classes.paper}>xs={width}</Paper>
		</Item>
		<Item xs={width}>
			<Paper className={classes.paper}>xs={width}</Paper>
		</Item>
	</Container>
);

const FixedColumns = ({ classes }) => (
	<div>
		<Header title='Fixed Column Layout' />
		<p>
			When using Grid components in the layout, they often result in changes to your layout depending on the
			breakpoint settings and the width of the screen. If the user makes the window smaller, the layout may change
			from 3 column to 2. However in certain cases, we might want to preseve the layout.
		</p>
		<p>
			Here is a layout that displays 8 elements on the screen and we want to make sure that we keep on displaying
			the 4 columns regardless of what the user does
		</p>
		{buildGrid(classes, 3)}
		<p>
			Here we specified the width = 3 which is 25% of the 12 columns capacity. However, we specified only the xs
			breakpoint. Therefore the number of columns will remain the same at any screen size because xs is the
			smallest breakpoint there is.
		</p>
		<p>
			Lets say we want a two column layout that should never change. So we need 50% i.e width = 6... and that
			turns out to be:
		</p>
		{buildGrid(classes, 6)}
	</div>
);

export default withStyles(styles)(FixedColumns);
