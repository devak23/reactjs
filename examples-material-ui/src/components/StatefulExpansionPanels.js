import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Header from './widgets/Header';
import { ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails, Icon } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import DescriptionIcon from '@material-ui/icons/Description';
import MessageIcon from '@material-ui/icons/Message';
import EmailIcon from '@material-ui/icons/Email';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';

const styles = (theme) => ({
	root: {
		flexGrow: 1
	},
	icon: {
		paddingRight: theme.spacing(2)
	}
});

const StatefulExpansionPanels = ({ classes }) => {
	const [ expanded, setExpanded ] = useState(0);
	const [ panels ] = useState([
		{
			title: 'Reports',
			content:
				'This is the reports panel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quia minus nisi quibusdam doloremque deserunt delectus maxime molestias facere dicta? Cumque nihil repellat labore molestias illo repellendus neque atque eius.',
			disabled: false,
			icon: <PictureAsPdfIcon />,
			hidden: false
		},
		{
			title: 'Statements',
			content:
				'This is the statements panel. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea voluptatem, laboriosam minima placeat nobis sequi illum laborum atque suscipit eius cumque cupiditate mollitia assumenda culpa illo officia sapiente voluptate id.',
			disabled: false,
			icon: <DescriptionIcon />,
			hidden: false
		},
		{
			title: 'Advices',
			content:
				'This is the advices panel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor consequuntur quaerat ipsam. Sit accusamus, ratione pariatur deleniti eius, autem incidunt eaque corrupti, sint omnis nostrum rem aut voluptas quos error.',
			disabled: true,
			icon: <MessageIcon />,
			hidden: false
		},
		{
			title: 'Notifications',
			content:
				'This is the notifications panel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem repellendus laudantium error, dicta iure quis quo. Maxime, totam cum voluptate cupiditate at sit fugiat iste dignissimos nemo eos nulla ducimus?',
			disabled: false,
			icon: <EmailIcon />,
			hidden: false
		},
		{
			title: 'Schedule',
			content: 'This is a schedule panel',
			disabled: false,
			icon: <AccessAlarmIcon />,
			hidden: true
		}
	]);

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
						<Typography>{panel.title}</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>{panel.content}</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>
			))}
			<p>
				<Typography>The schedule Panel is hidden</Typography>
			</p>
		</div>
	);
};
export default withStyles(styles)(StatefulExpansionPanels);
