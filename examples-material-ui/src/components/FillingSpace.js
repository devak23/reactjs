import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
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

const buildGrid = (classes, alignment) => (
	<Grid container spacing={4}>
		<Grid item xs={12} sm={6} md={3}>
			<Paper className={classes.paper}>
				<Grid container justify={alignment}>
					<Grid item>
						<Chip label='xs=12' />
					</Grid>
					<Grid item>
						<Chip label='sm=6' />
					</Grid>
					<Grid item>
						<Chip label='md=3' />
					</Grid>
				</Grid>
			</Paper>
		</Grid>
		<Grid item xs={12} sm={6} md={3}>
			<Paper className={classes.paper}>
				<Grid container justify={alignment}>
					<Grid item>
						<Chip label='xs=12' />
					</Grid>
					<Grid item>
						<Chip label='sm=6' />
					</Grid>
					<Grid item>
						<Chip label='md=3' />
					</Grid>
				</Grid>
			</Paper>
		</Grid>
		<Grid item xs={12} sm={6} md={3}>
			<Paper className={classes.paper}>
				<Grid container justify={alignment}>
					<Grid item>
						<Chip label='xs=12' />
					</Grid>
					<Grid item>
						<Chip label='sm=6' />
					</Grid>
					<Grid item>
						<Chip label='md=3' />
					</Grid>
				</Grid>
			</Paper>
		</Grid>
		<Grid item xs={12} sm={6} md={3}>
			<Paper className={classes.paper}>
				<Grid container justify={alignment}>
					<Grid item>
						<Chip label='xs=12' />
					</Grid>
					<Grid item>
						<Chip label='sm=6' />
					</Grid>
					<Grid item>
						<Chip label='md=3' />
					</Grid>
				</Grid>
			</Paper>
		</Grid>
	</Grid>
);

const FillingSpace = ({ classes, justify }) => (
	<div className={classes.root}>
		<Header title='Filling up Spaces' />
		<p>
			The justify property is specified on the container Grid component. In the following instance its the
			container that contains the Chip component as items. Each container is using flex-start value which will
			align the Grid items at the start of the container.
		</p>
		{buildGrid(classes, justify)}
		<p>
			The flex-star value aligns all of the Grid items at the start of the container. Instead of changing the
			breakpoint property values of these items which results in changed widths, you can change the justify
			property value to tell the Grid container how to fill empty spaces. For example using 'center' value results
			in the following:
		</p>
		{buildGrid(classes, 'center')}
	</div>
);

export default withStyles(styles)(FillingSpace);
