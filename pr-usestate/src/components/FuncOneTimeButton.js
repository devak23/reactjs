import React, { useState } from 'react';
import { Button } from '@material-ui/core';

const FuncOneTimeButton = ({ label, onClick }) => {
	const [ clicked, setClicked ] = useState(false);

	const handleClick = () => {
		onClick();

		// no more clicking
		setClicked(true);
	};

	return (
		<div style={{ margin: 10, padding: 10 }}>
			<Button color='primary' variant='contained' onClick={handleClick} disabled={clicked}>
				{label}
			</Button>
		</div>
	);
};

export default FuncOneTimeButton;
