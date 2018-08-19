import {
  StackNavigator,
  SwitchNavigator,
  TabNavigator
} from "react-navigation";
import React from "react";
import { View } from "react-native";
import Splash from "./src/Shared/components/Splash";
import HomeScreen from "./src/Shared/screens/HomeScreen";
import Onboarding from "./src/Shared/screens/OnboardingScreen";
import SaveScreen from "./src/Saved/screens/SaveScreen";
import HostsScreen from "./src/Hosts/screens/HostsScreen";
import AttractionsScreen from "./src/Attractions/screens/AttractionsScreen";
import ProfileScreen from "./src/User/screens/ProfileScreen";
import RidesScreen from "./src/Rides/screens/RidesScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather"
import AttractionsHeader from './src/Attractions/components/Header'
const AppStack = TabNavigator(
  {
    Perfil: {
      screen: ProfileScreen,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === 'Perfil') {
            iconName = `user`;
          }
          return <Feather name={iconName} size={30} color={tintColor} />;
        },
        header: (<View/>)
      })
    },
    Hospedagens: {
      screen: HostsScreen,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === 'Hospedagens') {
            iconName = `hotel`;
          }
          return <MaterialCommunityIcons name={iconName} size={30} color={tintColor} />;
        },
        header: (<View/>)
      })
    },
    Atrações: {
      screen: AttractionsScreen,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === 'Atrações') {
            iconName = `smile${focused ? '-beam' : ''}`;
          }
          return <FontAwesome5 name={iconName} size={30} color={tintColor} />;
        },
        header: (<AttractionsHeader />)
      })
    },
    Salvos: {
      screen: SaveScreen,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === 'Salvos') {
            iconName = `bookmark${focused ? '' : '-o'}`;
          }
          return <FontAwesome name={iconName} size={30} color={tintColor} />;
        },
        header: (<View/>)
      })
    },
    Caronas: {
      screen: RidesScreen,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === 'Caronas') {
            iconName = `car${focused ? '-connected' : ''}`;
          }
          return <MaterialCommunityIcons name={iconName} size={30} color={tintColor} />;
        },
        header: (<View/>)
      })
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      
    }),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray",
      style:{
        backgroundColor:'white',
        borderTopColor:'transparent'
      }
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
