import React from "react";
import {Link} from 'react-router-dom';
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
	ul: {
		listStyleType: "none",
		margin: 0,
		padding: 0,
		overflow: "hidden",
		backgroundColor: "#333"
	},
	li: {
		float: "left",
		"& a": {
			display: "block",
			color: "white",
			textAlign: "center",
			padding: "14px 16px",
			textDecoration: "none"
		},
		'& a:hover': {
			backgroundColor: '#111'
		}
	},
	active: {
		backgroundColor: '#4CAF50'
	}
});

const getMenuItems = () => {
	return [{
		id: 'home',
		path: '/home',
		title: 'Home'
	}, {
		id: 'sports',
		path: '/sports',
		title: 'Sports'
	}, {
		id: 'music',
		path: '/music',
		title: 'Music'
	}, {
		id: 'food',
		path: '/food',
		title: 'Food'
	}]
}


const Navbar = ({location}) => {
	const pathParam = location.pathname.substring(1);
	const {ul, li, active} = useStyles();
	return (
		<div>
			<ul className={ul}>
				{
					getMenuItems().map((menuItem) => 
					 <li key={menuItem.id} className={`${li} ${pathParam === menuItem.id ? active : ''}`}>
				 		<Link to={menuItem.path}>{menuItem.title}</Link>
				 	</li>)
				}

				{
				// <li className={`${li} ${pathParam === 'home' ? active : ''}`}>
				// 	<Link to="/home">Home</Link>
				// </li>
				// <li className={`${li} ${pathParam === 'food' ? active : ''}`}>
				// 	<Link to="/food">Food</Link>
				// </li>
				// <li className={`${li} ${pathParam === 'music' ? active : ''}`}>
				// 	<Link to="/music">Music</Link>
				// </li>
				// <li className={`${li} ${pathParam === 'sports' ? active : ''}`}>
				// 	<Link to="/sports">Sports</Link>
				// </li>
				}
			</ul>
		</div>
	);
};

export default Navbar;
