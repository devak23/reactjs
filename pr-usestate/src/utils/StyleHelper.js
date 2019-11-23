import { makeStyles } from '@material-ui/core';

const commonStyles = makeStyles({
	border: {
		border: '1px solid #DDD',
		padding: 10,
		margin: 10
	},
	spacing: {
		marginLeft: 2,
		marginRight: 2
	},
	container: {
		maxWidth: 1280,
		minWidth: 500,
		width: '60%',
		margin: 'auto'
	}
});

export { commonStyles };
