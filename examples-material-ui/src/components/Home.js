import React from 'react';
import Header from './widgets/Header';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Routes from '../Routes';
import Footer from './widgets/Footer';

const styles = (theme) => ({
	root: {
		flexGrow: 1
	},
	index: {
		padding: 1,
		fontWeight: 550
	}
});

const Home = ({ classes, title, githubPath }) => (
	<React.Fragment>
		<Header title={title} hideHome={true} hideBack={true} />
		<ul>
			{Routes.map((item, index) => (
				<li key={item.id}>
					<span className={classes.index}>{index + 1}.</span> <Link to={item.path}>{item.title}</Link>
				</li>
			))}
		</ul>
		<Footer githubPath={githubPath} />
	</React.Fragment>
);

export default withStyles(styles)(Home);
