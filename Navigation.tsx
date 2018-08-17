import { StackNavigator, SwitchNavigator, TabNavigator } from 'react-navigation'
import  Splash  from './src/Shared/components/Splash';
import HomeScreen from './src/Shared/screens/HomeScreen';
import Onboarding from './src/Shared/screens/OnboardingScreen';
import SaveScreen from './src/Shared/screens/SaveScreen';
import HostsScreen from './src/Shared/screens/HostsScreen';
import AttractionsScreen from './src/Shared/screens/AttractionsScreen';
import ProfileScreen from './src/Shared/screens/ProfileScreen';

const AppStack = TabNavigator(
    {
      Home: HomeScreen,
      Save: SaveScreen,
      Hosts: HostsScreen,
      Attractions: AttractionsScreen,
      Profile: ProfileScreen
    },
    {
      navigationOptions: {
        // tslint:disable-next-line:no-null-keyword
        header: null
      }
    }
  )

export const Navigation = SwitchNavigator(
    {
      Splash: Splash,
      Onboarding: Onboarding,
      App: AppStack
    },
    {
      initialRouteName: 'Splash'
    }
  )