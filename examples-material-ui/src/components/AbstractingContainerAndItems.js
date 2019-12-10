import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Header from './widgets/Header';

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

const AbstractingContainerAndItems = ({ classes }) => (
	<div className={classes.root}>
		<Header title='Abstracting Container and Items' />
		<p>
			A lot of screens having a lot of Grid elements for containers and items can be overwhelming. Here is a neat
			way to sort out that problem. The trick is to write a component as follows:
			<pre>{`const Container = props => <Grid container {...props} />`}</pre>
			<pre>{`const Item = props => <Grid item {...props} />`}</pre>
			With that little bit of modification the code becomes super clean
		</p>
		<pre>
			{`
		<Container spacing={4}>
			<Item xs={12} sm={6} md={3}>
				<Paper className={classes.paper}>xs=12, sm=6, md=3</Paper>
			</Item>
			<Item xs={12} sm={6} md={3}>
				<Paper className={classes.paper}>xs=12, sm=6, md=3</Paper>
			</Item>
			<Item xs={12} sm={6} md={3}>
				<Paper className={classes.paper}>xs=12, sm=6, md=3</Paper>
			</Item>
			<Item xs={12} sm={6} md={3}>
				<Paper className={classes.paper}>xs=12, sm=6, md=3</Paper>
			</Item>
		</Container>      
    `}
		</pre>
		which produces the following output:
		<Container spacing={4}>
			<Item xs={12} sm={6} md={3}>
				<Paper className={classes.paper}>xs=12, sm=6, md=3</Paper>
			</Item>
			<Item xs={12} sm={6} md={3}>
				<Paper className={classes.paper}>xs=12, sm=6, md=3</Paper>
			</Item>
			<Item xs={12} sm={6} md={3}>
				<Paper className={classes.paper}>xs=12, sm=6, md=3</Paper>
			</Item>
			<Item xs={12} sm={6} md={3}>
				<Paper className={classes.paper}>xs=12, sm=6, md=3</Paper>
			</Item>
		</Container>
		<p>as desired but with better abstraction!</p>
	</div>
);

export default withStyles(styles)(AbstractingContainerAndItems);
