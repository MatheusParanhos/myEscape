import { StackNavigator, SwitchNavigator } from 'react-navigation'
import  Splash  from './src/Shared/components/Splash';
import HomeScreen from './src/Shared/screens/HomeScreen';
import Onboarding from './src/Shared/screens/OnboardingScreen';

const AppStack = StackNavigator(
    {
      Home: HomeScreen,
      Onboarding: Onboarding
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
      App: AppStack
    },
    {
      initialRouteName: 'Splash'
    }
  )