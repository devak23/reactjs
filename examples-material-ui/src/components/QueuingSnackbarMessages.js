import React, { useState, Fragment } from 'react';
import Header from './widgets/Header';
import { withStyles } from '@material-ui/styles';
import { Snackbar } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Footer from './widgets/Footer';

const styles = (theme) => ({
	root: {
		flexGrow: 1
	},
	content: {
		width: 500
	}
});

const withMessage = (Wrapped) =>
	function WithMessage(props) {
		const [ queue, setQueue ] = useState([]);
		const [ open, setOpen ] = useState(false);
		const [ message, setMessage ] = useState('');

		const handleSendMessage = (msg) => {
			const newQueue = [ ...queue, msg ];
			if (newQueue.length === 1) {
				setOpen(true);
				setMessage(msg);
			}
		};

		const handleOnClose = () => {
			setOpen(false);
		};

		const handleOnExit = () => {
			const [ msg, ...rest ] = queue;
			if (msg) {
				setQueue(rest);
				setMessage(message);
				setOpen(true);
			}
		};

		return (
			<Fragment>
				<Wrapped message={handleSendMessage} {...props} />
				<Snackbar
					key={message}
					open={open}
					message={message}
					autoHideDuration={4000}
					onClose={handleOnClose}
					onExit={handleOnExit}
				/>
			</Fragment>
		);
	};

const QueuingSnackbarMessages = withMessage(({ message, title, githubPath }) => {
	const [ counter, setCounter ] = useState(0);

	const handleOnClick = () => {
		const newCounter = counter + 1;
		setCounter(newCounter);
		message(`Message ${newCounter}`);
	};

	return (
		<div className='root'>
			<Header title={title} />
			<div className='content'>
				<Button onClick={handleOnClick}>Add Message</Button>
			</div>
			<Footer githubPath={githubPath} />
		</div>
	);
});

export default withStyles(styles)(QueuingSnackbarMessages);
