import React from "react";

//Import Navigators
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";

//Import External Screens
import Home from "./drawerScreens/Home";
import Maps from "./drawerScreens/Maps";
import Own from "./drawerScreens/Own";
import Profile from "./drawerScreens/Profile";
import Want from "./drawerScreens/Want";
import Settings from "./drawerScreens/Settings";
import CustomSidebarMenu from "./Components/CustomSidebarMenu";
import NavigationDrawerHeader from "./Components/NavigationDrawerHeader";

const FirstActivity_StackNavigator = createStackNavigator({
  First: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: "Home",
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: "#307ecc",
      },
      headerTintColor: "#fff",
    }),
  },
});
const SecondActivity_StackNavigator = createStackNavigator({
  First: {
    screen: Profile,
    navigationOptions: ({ navigation }) => ({
      title: "Profile",
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: "#307ecc",
      },
      headerTintColor: "#fff",
    }),
  },
});
const ThirdActivity_StackNavigator = createStackNavigator({
  First: {
    screen: Want,
    navigationOptions: ({ navigation }) => ({
      title: "Want",
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: "#307ecc",
      },
      headerTintColor: "#fff",
    }),
  },
});
const FourthActivity_StackNavigator = createStackNavigator({
  First: {
    screen: Own,
    navigationOptions: ({ navigation }) => ({
      title: "Own",
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: "#307ecc",
      },
      headerTintColor: "#fff",
    }),
  },
});
const FifthActivity_StackNavigator = createStackNavigator({
  First: {
    screen: Maps,
    navigationOptions: ({ navigation }) => ({
      title: "Maps",
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: "#307ecc",
      },
      headerTintColor: "#fff",
    }),
  },
});
const SixthActivity_StackNavigator = createStackNavigator({
  First: {
    screen: Settings,
    navigationOptions: ({ navigation }) => ({
      title: "Settings",
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: "#307ecc",
      },
      headerTintColor: "#fff",
    }),
  },
});

const DrawerNavigatorRoutes = createDrawerNavigator(
  {
    Home: {
      screen: FirstActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: "Home",
      },
    },
    Profile: {
      screen: SecondActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: "Profile",
      },
    },
    Own: {
      screen: ThirdActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: "Own",
      },
    },
    Want: {
      screen: FourthActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: "Want",
      },
    },
    Maps: {
      screen: FifthActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: "Maps",
      },
    },
    Settings: {
      screen: SixthActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: "Setting",
      },
    },
  },
  {
    contentComponent: CustomSidebarMenu,
    drawerOpenRoute: "DrawerOpen",
    drawerCloseRoute: "DrawerClose",
    drawerToggleRoute: "DrawerToggle",
  }
);
export default DrawerNavigatorRoutes;
