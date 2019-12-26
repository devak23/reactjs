import React from 'react';
import Header from './widgets/Header';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Routes from '../Routes';

const styles = (theme) => ({
	root: {
		flexGrow: 1
	},
	index: {
		padding: 1,
		fontWeight: 550
	}
});

const Home = ({ classes }) => (
	<React.Fragment>
		<Header title='Topics Of Discussion' hideHome={true} hideBack={true} />
		<ul>
			{Routes.map((item, index) => (
				<li key={item.id}>
					<span className={classes.index}>{index + 1}.</span> <Link to={item.path}>{item.title}</Link>
				</li>
			))}
		</ul>
	</React.Fragment>
);

export default withStyles(styles)(Home);
