import UnderstandingBreakPoints from './UnderstandingBreakPoints';
import FillingSpace from './FillingSpace';
import AbstractingContainerAndItems from './AbstractingContainerAndItems';
import FixedColumns from './FixedColumns';
import ChangeColumnDirection from './ChangeColumnDirection';
import FixedPositionBar from './FixedPositionBar';
import HideOnScroll from './HideOnScroll';
import ToolbarAbstraction from './ToolbarAbstraction';
import Drawers from './Drawers';
import DrawerWithNavigation from './DrawerWithNavigation';
import AppbarTabIntegration from './AppbarTabIntegration';

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
		path: '/changingcolumndirection',
		title: 'Changing Column Direction',
		component: ChangeColumnDirection
	},
	{
		id: 'fixedPositionAppBar',
		path: '/fixedPositionAppBar',
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
		path: '/drawerTypes',
		title: 'Drawer Types',
		component: Drawers
	},
	{
		id: 'drawerWithNavigation',
		path: '/drawerwithnavigation',
		title: 'Drawer with Navigation',
		component: DrawerWithNavigation
	},
	{
		id: 'appbarTagIntegration',
		path: '/appbartabintegration',
		title: 'Tabs and Integration with AppBar',
		component: AppbarTabIntegration
	}
];

export default PathData;
