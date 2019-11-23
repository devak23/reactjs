import React, { useState } from 'react';
import { commonStyles } from '../utils/StyleHelper';
import { Button } from '@material-ui/core';
import Title from './Title';

const RandomNumberGenerator = () => {
	const classes = commonStyles();

	const [items, setItems] = useState([]);

	const handleAddNumber = () => {
		setItems([
			...items,
			{
				id: items.length,
				value: Math.round(Math.random() * 100, 2)
			}
		]);
	};

	const handleClearNumbers = () => setItems([]);

	return (
		<div className={classes.border}>
			<Title title='Random Number Generator' />
			<div style={{ marginLeft: 0, paddingTop: 10 }}>
				<Button className={classes.spacing} variant='contained' onClick={handleAddNumber}>
					Add Random number
				</Button>
				<Button className={classes.spacing} variant='contained' onClick={handleClearNumbers}>
					Clear Numbers
				</Button>
			</div>
			<div style={{ marginLeft: 0, paddingTop: 10 }}>
				Random Numbers: {items.map((item, index) => <span>{index !== 0 ? ',' + item.value : item.value}</span>)}
			</div>
		</div>
	);
};

export default RandomNumberGenerator;
