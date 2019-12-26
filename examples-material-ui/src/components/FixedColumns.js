import React from 'react';
import Header from './widgets/Header';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Footer from './widgets/Footer';

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

const FixedColumns = ({ classes, title, githubPath }) => (
	<div>
		<Header title={title} />
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
		<p>
			We can combine different widths in a fixed way. For example a header and footer that will use full width
			layout while the elements inside will use two columns like so
		</p>
		<Container spacing={4}>
			<Item xs={12}>
				<Paper className={classes.paper}>xs=12 - Header</Paper>
			</Item>
			<Item xs={6}>
				<Paper className={classes.paper}>xs=6 - Item1</Paper>
			</Item>
			<Item xs={6}>
				<Paper className={classes.paper}>xs=6 - Item2</Paper>
			</Item>
			<Item xs={6}>
				<Paper className={classes.paper}>xs=6 - Item3</Paper>
			</Item>
			<Item xs={6}>
				<Paper className={classes.paper}>xs=6 - Item4</Paper>
			</Item>
			<Item xs={6}>
				<Paper className={classes.paper}>xs=6 - Item5</Paper>
			</Item>
			<Item xs={6}>
				<Paper className={classes.paper}>xs=6 - Item6</Paper>
			</Item>
			<Item xs={6}>
				<Paper className={classes.paper}>xs=6 - Item7</Paper>
			</Item>
			<Item xs={6}>
				<Paper className={classes.paper}>xs=6 - Item8</Paper>
			</Item>
			<Item xs={12}>
				<Paper className={classes.paper}>xs=12 - Footer</Paper>
			</Item>
		</Container>
		<Footer githubPath={githubPath} />
	</div>
);

export default withStyles(styles)(FixedColumns);
