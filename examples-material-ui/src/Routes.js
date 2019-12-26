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
import QueuingSnackbarMessages from './components/QueuingSnackbarMessages';

const GITHUB_ROOT = 'https://github.com/devak23';
const GITHUB_PROJECT = GITHUB_ROOT + '/reactjs/blob/master/examples-material-ui';
const GITHUB_SRC_FILE = GITHUB_PROJECT + '/src/components';
const PathData = [
	{
		id: 'understandingBreakPoints',
		path: '/breakpoints',
		title: 'Understanding Break Points',
		CustomComponent: UnderstandingBreakPoints,
		githubPath: GITHUB_SRC_FILE + '/UnderstandingBreakPoints.js'
	},
	{
		id: 'fillingSpace',
		path: '/fillingspace',
		title: 'Filling Space',
		CustomComponent: FillingSpace,
		githubPath: GITHUB_SRC_FILE + '/FillingSpace.js'
	},
	{
		id: 'abstractingContainerAndItems',
		path: '/abstractingcontaineranditems',
		title: 'Abstracting Container and Items',
		CustomComponent: AbstractingContainerAndItems,
		githubPath: GITHUB_SRC_FILE + '/AbstractingContainerAndItems.js'
	},
	{
		id: 'fixedColumnLayout',
		path: '/fixedcolumnlayout',
		title: 'Fixed Column Layout',
		CustomComponent: FixedColumns,
		githubPath: GITHUB_SRC_FILE + '/FixedColumns.js'
	},
	{
		id: 'changingColumnDirection',
		path: '/changingcolumndirection',
		title: 'Changing Column Direction',
		CustomComponent: ChangeColumnDirection,
		githubPath: GITHUB_SRC_FILE + '/ChangeColumnDirection.js'
	},
	{
		id: 'fixedPositionAppBar',
		path: '/fixedPositionAppBar',
		title: 'Fixed Position AppBar',
		CustomComponent: FixedPositionBar,
		githubPath: GITHUB_SRC_FILE + '/FixedPositionBar.js'
	},
	{
		id: 'hideOnScroll',
		path: '/hideonscroll',
		title: 'Hide On Scroll',
		CustomComponent: HideOnScroll,
		githubPath: GITHUB_SRC_FILE + '/HideOnScroll.js'
	},
	{
		id: 'toolbarAbstraction',
		path: '/toolbarabstraction',
		title: 'Toolbar Abstraction',
		CustomComponent: ToolbarAbstraction,
		githubPath: GITHUB_SRC_FILE + '/ToolbarAbstraction.js'
	},
	{
		id: 'drawerTypes',
		path: '/drawertypes',
		title: 'Drawer Types',
		CustomComponent: Drawers,
		githubPath: GITHUB_SRC_FILE + '/Drawers.js'
	},
	{
		id: 'drawerWithNavigation',
		path: '/drawerwithnavigation',
		title: 'Drawer with Navigation',
		CustomComponent: DrawerWithNavigation,
		githubPath: GITHUB_SRC_FILE + '/DrawerWithNavigation.js'
	},
	{
		id: 'appbarTagIntegration',
		path: '/appbartabintegration',
		title: 'Tabs and Integration with AppBar',
		CustomComponent: AppbarTabIntegration,
		githubPath: GITHUB_SRC_FILE + '/AppbarTabIntegration.js'
	},
	{
		id: 'stateBasedTabs',
		path: '/statebasedtabs',
		title: 'State based Tabs',
		CustomComponent: StateBasedTabs,
		githubPath: GITHUB_SRC_FILE + '/StateBasedTabs.js'
	},
	{
		id: 'statefulExpansionPanels',
		path: '/statefulexpansionpanels',
		title: 'Stateful Expansion Panels',
		CustomComponent: StatefulExpansionPanels,
		githubPath: GITHUB_SRC_FILE + '/StatefulExpansionPanels.js'
	},
	{
		id: 'simpleDisplayLists',
		path: '/simpledisplaylists',
		title: 'Simple Display Lists',
		CustomComponent: SimpleDisplayLists,
		githubPath: GITHUB_SRC_FILE + '/SimpleDisplayLists.js'
	},
	{
		id: 'avatarsAndText',
		path: '/avatarsandtexts',
		title: 'Avatars And Texts',
		CustomComponent: AvatarsAndTexts,
		githubPath: GITHUB_SRC_FILE + '/AvatarsAndTexts.js'
	},
	{
		id: 'listSections',
		path: '/listsections',
		title: 'List Sections',
		CustomComponent: ListSections,
		githubPath: GITHUB_SRC_FILE + '/ListSections.js'
	},
	{
		id: 'nestedLists',
		path: '/nestedlists',
		title: 'Nested Lists',
		CustomComponent: NestedLists,
		githubPath: GITHUB_SRC_FILE + '/NestedLists.js'
	},
	{
		id: 'listControls',
		path: '/listcontrols',
		title: 'List Controls',
		CustomComponent: ListControls,
		githubPath: GITHUB_SRC_FILE + '/ListControls.js'
	},
	{
		id: 'scrollingLists',
		path: '/scrollinglists',
		title: 'Scrolling Lists',
		CustomComponent: ScrollingLists,
		githubPath: GITHUB_SRC_FILE + '/ScrollingLists.js'
	},
	{
		id: 'snackbar',
		path: '/snackbar',
		title: 'Snackbar',
		CustomComponent: ShowSnackbar,
		githubPath: GITHUB_SRC_FILE + '/ShowSnackbar.js'
	},
	{
		id: 'snackbarTransitions',
		path: '/snackbartransitions',
		title: 'Snackbar Transitions',
		CustomComponent: SnackbarTransitions,
		githubPath: GITHUB_SRC_FILE + '/SnackbarTransitions.js'
	},
	{
		id: 'snackbarPositions',
		path: '/snackbarpositions',
		title: 'Snackbar Positions',
		CustomComponent: SnackbarPositions,
		githubPath: GITHUB_SRC_FILE + '/SnackbarPositions.js'
	},
	{
		id: 'snackbarErrorBoundaries',
		path: '/snackbarerrorboundaries',
		title: 'Snackbar Error Boundaries',
		CustomComponent: SnackbarErrorBoundaries,
		githubPath: GITHUB_SRC_FILE + '/SnackbarErrorBoundaries.js'
	},
	{
		id: 'queuingSnackbarMessages',
		path: '/queuingsnackbarmessages',
		title: 'Queuing Snackbar Messages',
		CustomComponent: QueuingSnackbarMessages,
		githubPath: GITHUB_SRC_FILE + '/QueuingSnackbarMessages.js'
	}
];

export default PathData;
