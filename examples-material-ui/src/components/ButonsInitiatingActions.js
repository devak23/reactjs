import React from 'react';
import Header from './widgets/Header';
import Footer from './widgets/Footer';
import { withStyles } from '@material-ui/styles';
import { Grid, Button, Typography } from '@material-ui/core';

const styles = (theme) => ({
	root: {
		flexGrow: 1
	},
	container: {
		margin: theme.spacing(1)
	},
	content: {
		width: 600
	}
});

const ButonsInitiatingActions = ({ classes, title, githubPath }) => {
	const disabled = true;

	return (
		<div className={classes.root}>
			<Header title={title} />
			<div className={classes.content}>
				<Grid container direction='column' spacing={2} className={classes.container}>
					<Grid item>
						<Button variant='outlined'>Outlined</Button>
					</Grid>
					<Grid item>
						<Button variant='contained'>Contained</Button>
					</Grid>
					<Grid item>
						<Button variant='text'>Text</Button>
					</Grid>
				</Grid>
				<Typography>
					The variant 'TEXT' draws less attention and 'Contained' pops out as you see above. The default
					variant is TEXT. The color and disabled property let you control the emphasis of the button relative
					to the surroundings. The emphasis is a cumulative result of the variant and the other properties
					such as color.
				</Typography>
				<Grid container direction='column' spacing={16} className={classes.container}>
					<Grid item>
						<Typography variant='h6'>Default</Typography>
						<Grid container spacing={4}>
							<Grid item>
								<Button variant='text' disabled={disabled}>
									Text
								</Button>
							</Grid>
							<Grid item>
								<Button variant='outlined' disabled={disabled}>
									Outlined
								</Button>
							</Grid>
							<Grid item>
								<Button variant='contained' disabled={disabled}>
									Contained
								</Button>
							</Grid>
						</Grid>
					</Grid>
					<Grid item>
						<Typography variant='h6'>Primary</Typography>
						<Grid container spacing={4}>
							<Grid item>
								<Button variant='text' color='primary' disabled={disabled}>
									Text
								</Button>
							</Grid>
							<Grid item>
								<Button variant='outlined' color='primary' disabled={disabled}>
									Outlined
								</Button>
							</Grid>
							<Grid item>
								<Button variant='contained' color='primary' disabled={disabled}>
									Contained
								</Button>
							</Grid>
						</Grid>
					</Grid>
					<Grid item>
						<Typography variant='h6'>Secondary</Typography>
						<Grid container spacing={4}>
							<Grid item>
								<Button variant='text' color='secondary' disabled={disabled}>
									Text
								</Button>
							</Grid>
							<Grid item>
								<Button variant='outlined' color='secondary' disabled={disabled}>
									Outlined
								</Button>
							</Grid>
							<Grid item>
								<Button variant='contained' color='secondary' disabled={disabled}>
									Contained
								</Button>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</div>
			<Footer githubPath={githubPath} />
		</div>
	);
};

export default withStyles(styles)(ButonsInitiatingActions);
