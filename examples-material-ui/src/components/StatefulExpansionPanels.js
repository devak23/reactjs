import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Header from './widgets/Header';
import { ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails, Icon } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import DescriptionIcon from '@material-ui/icons/Description';
import EmailIcon from '@material-ui/icons/Email';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import StorageIcon from '@material-ui/icons/Storage';
import uuidv4 from 'uuid/v4';

const styles = (theme) => ({
	root: {
		flexGrow: 1
	},
	icon: {
		marginRight: theme.spacing(1)
	},
	panelDetails: {
		flexDirection: 'column',
		overflow: 'auto',
		height: 150
	}
});

const StatefulExpansionPanels = ({ classes }) => {
	const [ expanded, setExpanded ] = useState(0);
	const [ panels ] = useState([
		{
			id: uuidv4(),
			title: 'Failed Reports by Hour',
			content:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quia minus nisi quibusdam doloremque deserunt delectus maxime molestias facere dicta? Cumque nihil repellat labore molestias illo repellendus neque atque eius.',
			disabled: false,
			icon: <PictureAsPdfIcon />,
			hidden: false
		},
		{
			id: uuidv4(),
			title: 'Failed Reports by Day',
			content:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea voluptatem, laboriosam minima placeat nobis sequi illum laborum atque suscipit eius cumque cupiditate mollitia assumenda culpa illo officia sapiente voluptate id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ducimus voluptate magnam culpa debitis nemo quae exercitationem, iure nihil, quidem ea non delectus. Aliquam placeat magnam id a autem in.',
			disabled: false,
			icon: <DescriptionIcon />,
			hidden: false
		},
		{
			id: uuidv4(),
			title: 'Network and Storage',
			content:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor consequuntur quaerat ipsam. Sit accusamus, ratione pariatur deleniti eius, autem incidunt eaque corrupti, sint omnis nostrum rem aut voluptas quos error. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ut sint quo illo laboriosam voluptates labore recusandae quidem ipsam libero sunt, rem cumque nisi eos laudantium quam odit nobis alias!',
			disabled: true,
			icon: <StorageIcon />,
			hidden: false
		},
		{
			id: uuidv4(),
			title: 'Notifications',
			content:
				'This is the notifications panel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem repellendus laudantium error, dicta iure quis quo. Maxime, totam cum voluptate cupiditate at sit fugiat iste dignissimos nemo eos nulla ducimus?',
			disabled: false,
			icon: <EmailIcon />,
			hidden: true
		},
		{
			id: uuidv4(),
			title: 'Schedules',
			content: 'This is a schedule panel',
			disabled: false,
			icon: <AccessAlarmIcon />,
			hidden: false
		}
	]);

	const fetchPanelContent = (id) => {
		new Promise((resolve) =>
			setTimeout(() => {
				resolve(panels.filter((panel) => panel.id).content);
			}, 1000)
		);
	};
	// This is a HOC. It takes index of the panel you want to expand and returns
	// a function that sets the expanded state when a given panel is clicked on.
	const handleOnChange = (expanded) => () => setExpanded(expanded);

	return (
		<div className={classes.root}>
			<Header title='Stateful Expansion Panels' />
			{panels.filter((panel) => !panel.hidden).map((panel, index) => (
				<ExpansionPanel
					key={index}
					disabled={panel.disabled}
					expanded={index === expanded}
					onChange={handleOnChange(index)}
				>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<span className={classes.icon}>{panel.icon}</span>
						<Typography variant='subtitle2'>{panel.title}</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography paragraph>{fetchPanelContent(panel.id)}</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>
			))}
			<div>
				<Typography>The notifications panel is hidden</Typography>
			</div>
		</div>
	);
};
export default withStyles(styles)(StatefulExpansionPanels);
