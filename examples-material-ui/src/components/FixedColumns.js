import React from 'react';
import Header from './widgets/Header';
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
const FixedColumns = ({ classes }) => (
	<div>
		<Header title='Fixed Column Layout' />
	</div>
);

export default withStyles(styles)(FixedColumns);
