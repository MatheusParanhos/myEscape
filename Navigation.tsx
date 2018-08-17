import {
  StackNavigator,
  SwitchNavigator,
  TabNavigator
} from "react-navigation";
import Splash from "./src/Shared/components/Splash";
import HomeScreen from "./src/Shared/screens/HomeScreen";
import Onboarding from "./src/Shared/screens/OnboardingScreen";
import SaveScreen from "./src/Saved/screens/SaveScreen";
import HostsScreen from "./src/Hosts/screens/HostsScreen";
import AttractionsScreen from "./src/Attractions/screens/AttractionsScreen";
import ProfileScreen from "./src/Shared/screens/ProfileScreen";
import RidesScreen from "./src/Rides/screens/RidesScreen";

const AppStack = TabNavigator(
  {
    Perfil: ProfileScreen,
    Hospedagens: HostsScreen,
    Atrações: AttractionsScreen,
    Salvos: SaveScreen,
    Caronas: RidesScreen
  },
  {
    navigationOptions: {
      // tslint:disable-next-line:no-null-keyword
      header: null
    }
  }
);

export const Navigation = SwitchNavigator(
  {
    Splash: Splash,
    Onboarding: Onboarding,
    App: AppStack
  },
  {
    initialRouteName: "Splash"
  }
);
