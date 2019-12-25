import UnderstandingBreakPoints from './components/UnderstandingBreakPoints';
import FillingSpace from './components/FillingSpace';
import AbstractingContainerAndItems from './components/AbstractingContainerAndItems';
import FixedColumns from './components/FixedColumns';
import ChangeColumnDirection from './components/ChangeColumnDirection';
import FixedPositionBar from './components/FixedPositionBar';
import HideOnScroll from './components/HideOnScroll';
import ToolbarAbstraction from './components/ToolbarAbstraction';
import Drawers from './components/Drawers';
import DrawerWithNavigation from './components/DrawerWithNavigation';
import AppbarTabIntegration from './components/AppbarTabIntegration';
import StateBasedTabs from './components/StateBasedTabs';
import StatefulExpansionPanels from './components/StatefulExpansionPanels';
import SimpleDisplayLists from './components/SimpleDisplayLists';
import AvatarsAndTexts from './components/AvatarsAndTexts';
import ListSections from './components/ListSections';
import NestedLists from './components/NestedLists';
import ListControls from './components/ListControls';
import ScrollingLists from './components/ScrollingLists';
import ShowSnackbar from './components/ShowSnackbar';
import SnackbarTransitions from './components/SnackbarTransitions';
import SnackbarPositions from './components/SnackbarPositions';
import SnackbarErrorBoundaries from './components/SnackbarErrorBoundaries';

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
	},
	{
		id: 'stateBasedTabs',
		path: '/statebasedtabs',
		title: 'State based Tabs',
		component: StateBasedTabs
	},
	{
		id: 'statefulExpansionPanels',
		path: '/statefulexpansionpanels',
		title: 'Stateful Expansion Panels',
		component: StatefulExpansionPanels
	},
	{
		id: 'simpleDisplayLists',
		path: '/simpledisplaylists',
		title: 'Simple Display Lists',
		component: SimpleDisplayLists
	},
	{
		id: 'avatarsAndText',
		path: '/avatarsandtexts',
		title: 'Avatars And Texts',
		component: AvatarsAndTexts
	},
	{
		id: 'listSections',
		path: '/listsections',
		title: 'List Sections',
		component: ListSections
	},
	{
		id: 'nestedLists',
		path: '/nestedlists',
		title: 'Nested Lists',
		component: NestedLists
	},
	{
		id: 'listControls',
		path: '/listcontrols',
		title: 'List Controls',
		component: ListControls
	},
	{
		id: 'scrollingLists',
		path: '/scrollinglists',
		title: 'Scrolling Lists',
		component: ScrollingLists
	},
	{
		id: 'snackbar',
		path: '/snackbar',
		title: 'Snackbar',
		component: ShowSnackbar
	},
	{
		id: 'snackbarTransitions',
		path: '/snackbartransitions',
		title: 'Snackbar Transitions',
		component: SnackbarTransitions
	},
	{
		id: 'snackbarPositions',
		path: '/snackbarpositions',
		title: 'Snackbar Positions',
		component: SnackbarPositions
	},
	{
		id: 'snackbarErrorBoundaries',
		path: '/snackbarerrorboundaries',
		title: 'Snackbar Error Boundaries',
		component: SnackbarErrorBoundaries
	}
];

export default PathData;
