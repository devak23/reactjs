import React from 'react';
import Header from './widgets/Header';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
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

const Container = (props) => <Grid container {...props} />;
const Item = (props) => <Grid item {...props} />;

const buildItem = (classes, label1, label2) => (
	<Item xs={3}>
		<Container spacing={2} direction='column'>
			<Item>
				<Paper className={classes.paper}>
					<Typography>{label1}</Typography>
				</Paper>
			</Item>
			<Item>
				<Paper className={classes.paper}>
					<Typography>{label2}</Typography>
				</Paper>
			</Item>
		</Container>
	</Item>
);

const ChangeColumnDirection = ({ classes }) => (
	<div className={classes.root}>
		<Header title='Change Column Direction' />
		<p>
			Very often, the elements are placed from left to right in a Grid. We would like to have more control over it
			as to which element goes where. How about if we had the elements in a vertical fashion from top to bottom
			instead of left to right, like so:
		</p>
		<Container spacing={4} justify='space-around'>
			{buildItem(classes, 'One', 'Two')}
			{buildItem(classes, 'Three', 'Four')}
			{buildItem(classes, 'Five', 'Six')}
			{buildItem(classes, 'Seven', 'Eight')}
		</Container>
		<p>
			The Grid item uses an xs = 4 (although not explicitly specified) to put 4 columns on the screen. Next the
			container has direction property set to 'column' which will place the elements in a top to bottom fashion.
		</p>
		<p>
			At times there might be a need to hide the last column which makes more sense than trying to accomodate with
			the shrinking screen width. One can use the Hidden component for this. To hide the last column after a
			specific break point, you just need to wrap the last column with Hidden.
		</p>
		<Container spacing={4} justify='space-around'>
			{buildItem(classes, 'One', 'Two')}
			{buildItem(classes, 'Three', 'Four')}
			{buildItem(classes, 'Five', 'Six')}
			<Hidden smDown>{buildItem(classes, 'Seven', 'Eight')}</Hidden>
		</Container>
		<p>
			That specifies that for the screen size 'smDown' (small and down) hide the last column. Try resizing the
			page and you will see the last column hiding when the page is shrunk
		</p>
	</div>
);

export default withStyles(styles)(ChangeColumnDirection);
