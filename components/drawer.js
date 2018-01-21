import React from "react";
import { View, Text } from "react-native";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";

import MainStack from "./mainStack";

const RootDrawer = DrawerNavigator({
  Home: {
    screen: MainStack,
    navigationOptions: {
      drawerLabel: "Home",
      drawerIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? "ios-home" : "ios-home-outline"}
          size={20}
          style={{ color: tintColor }}
        />
      )
    }
  }
});

const RootNavigator = StackNavigator(
  {
    Home: {
      screen: RootDrawer
    }
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);
export default RootNavigator;
