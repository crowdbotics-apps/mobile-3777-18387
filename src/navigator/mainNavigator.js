import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile70626Navigator from '../features/UserProfile70626/navigator';
import Maps70607Navigator from '../features/Maps70607/navigator';
import Settings70585Navigator from '../features/Settings70585/navigator';
import Settings70570Navigator from '../features/Settings70570/navigator';
import NotificationList70569Navigator from '../features/NotificationList70569/navigator';
import Maps70568Navigator from '../features/Maps70568/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile70626: { screen: UserProfile70626Navigator },
Maps70607: { screen: Maps70607Navigator },
Settings70585: { screen: Settings70585Navigator },
Settings70570: { screen: Settings70570Navigator },
NotificationList70569: { screen: NotificationList70569Navigator },
Maps70568: { screen: Maps70568Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
