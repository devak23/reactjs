import React, { useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Header from './widgets/Header';
import Prism from 'prismjs';
import '../prism.css';

const styles = (theme) => ({
	root: {
		flexGrow: 1
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary
	},
	text: {
		padding: '10px 0'
	}
});

const Container = (props) => <Grid container {...props} />;
const Item = (props) => <Grid item {...props} />;

const AbstractingContainerAndItems = ({ classes }) => {
	useEffect(() => {
		Prism.highlightAll();
	}, []);

	return (
		<div className={classes.root}>
			<Header title='Abstracting Container and Items' />
			<div className={classes.text}>
				A lot of screens having a lot of Grid elements for containers and items can be overwhelming. Here is a
				neat way to sort out that problem. The trick is to write a component as follows:
				<pre>
					<code className='language-javascript'>{`const Container = props => <Grid container {...props} />`}</code>
				</pre>
				<pre>
					<code className='language-javascript'>{`const Item = props => <Grid item {...props} />`}</code>
				</pre>
				With that little bit of modification the code becomes super clean
			</div>
			<pre>
				<code className='language-html'>
					{`
  <Container spacing={4}>
    <Item xs={12} sm={6} md={3}>
      <Paper className={classes.paper}>xs=12, sm=6, md=3</Paper>
    </Item>
    <Item xs={12} sm={6} md={3}>
      <Paper className={classes.paper}>xs=12, sm=6, md=3</>
    </Item>
    <Item xs={12} sm={6} md={3}>
      <Paper className={classes.paper}>xs=12, sm=6, md=3</Paper>
    </Item>
    <Item xs={12} sm={6} md={3}>
      <Paper className={classes.paper}>xs=12, sm=6, md=3</Paper>
    </Item>
  </Container>      
    `}
				</code>
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
			<div className={classes.text}>
				If we tend to use the same breakpoints over and over in the layout, we can include them in the higher
				order components like so:
				<pre>
					<code className='language-javascript'>{`const Container = props => <Grid container {...props} />`}</code>
				</pre>
				<pre>
					<code className='language-javascript'>{`const Item = props => <Grid item xs={12} sm={6} md={3} {...props} />`}</code>
				</pre>
				and the resulting code is now a lot simplified like so:
				<pre>
					<code className='language-html'>
						{`
  <Container spacing={4}>
    <Item>
      <Paper className={classes.paper}>xs=12, sm=6, md=3</Paper>
    </Item>
    <Item>
      <Paper className={classes.paper}>xs=12, sm=6, md=3</Paper>
    </Item>
    <Item>
      <Paper className={classes.paper}>xs=12, sm=6, md=3</Paper>
    </Item>
    <Item>
      <Paper className={classes.paper}>xs=12, sm=6, md=3</Paper>
    </Item>
  </Container>      
    `}
					</code>
				</pre>
			</div>
		</div>
	);
};

export default withStyles(styles)(AbstractingContainerAndItems);
