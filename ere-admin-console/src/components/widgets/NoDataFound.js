import React from 'react';
import ImageRepository from '../helpers/ImageRepository';
import { createUseStyles } from 'react-jss';

const getStyles = createUseStyles({
	title: {
		padding: 10,
		fontFamily: 'Open Sans Condensed',
		fontSize: '2em',
		fontWeight: 'bold'
	},
	mbox: {
		paddingTop: 100
	},
	boxBorder: {
		borderBottom: '1px solid #c7c7c7'
	}
});

const NoDataFound = ({ message }) => {
	const classes = getStyles();
	let title = message && "Hmm... That doesn't look good!";
	return (
		<section>
			<div className='row'>
				<div className='col m4'>&nbsp;</div>
				<div className='col m4'>
					<div className={`${classes.title}`}>{title ? title : 'Please execute a search'}</div>
				</div>
				<div className='col m4' />
			</div>
			<div className='row'>
				<div className='col m4'>{title && <img alt='no_data_found.png' src={ImageRepository.noImageFound} />}</div>
				<div className='col m4'>
					<div className={classes.mbox}>{message}</div>
				</div>
				<div className='col m4' />
			</div>
		</section>
	);
};

export default NoDataFound;
