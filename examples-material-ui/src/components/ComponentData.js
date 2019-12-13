import UnderstandingBreakPoints from './UnderstandingBreakPoints';
import FillingSpace from './FillingSpace';
import AbstractingContainerAndItems from './AbstractingContainerAndItems';
import FixedColumns from './FixedColumns';
import ChangeColumnDirection from './ChangeColumnDirection';
import FixedPositionBar from './FixedPositionBar';
import HideOnScroll from './HideOnScroll';
import ToolbarAbstraction from './ToolbarAbstraction';
import Drawers from './Drawers';

const PathData = [
	{
		id: 'understandingBreakPoints',
		path: '/breakpoints',
		title: 'Understanding Break Points',
		component: UnderstandingBreakPoints
	},
	{
		id: 'fillingSpace',
		path: '/space',
		title: 'Filling Space',
		component: FillingSpace
	},
	{
		id: 'abstractingContainerAndItems',
		path: '/abstracting',
		title: 'Abstracting Container and Items',
		component: AbstractingContainerAndItems
	},
	{
		id: 'fixedColumnLayout',
		path: '/fixedcolumns',
		title: 'Fixed Column Layout',
		component: FixedColumns
	},
	{
		id: 'changingColumnDirection',
		path: '/changedirection',
		title: 'Changing Column Direction',
		component: ChangeColumnDirection
	},
	{
		id: 'fixedPositionAppBar',
		path: '/fixedPosition',
		title: 'Fixed Position AppBar',
		component: FixedPositionBar
	},
	{
		id: 'hideOnScroll',
		path: '/hideonscroll',
		title: 'Hide On Scroll',
		component: HideOnScroll
	},
	{
		id: 'toolbarAbstraction',
		path: '/toolbarabstraction',
		title: 'Toolbar Abstraction',
		component: ToolbarAbstraction
	},
	{
		id: 'drawerTypes',
		path: '/drawers',
		title: 'Drawers',
		component: Drawers
	}
];

export default PathData;
