import { React } from "react";
import { StackNavigator, DrawerNavigator } from "react-navigation";

const createStackNavigator = function(screensArray) {
    var screensObject = {};
    screensArray.forEach(function(screen) {
        screensObject[screen.displayName] = {
            screen: screen,
            navigationOptions: screen.navigationOptions
        };
    });
    return StackNavigator(screensObject, {
        initialRouteName: screensArray[0].displayName,
        navigationOptions: ({ navigation }) => ({
            headerStyle: { backgroundColor: "#201B51" },
            headerTintColor: "white"
        })
    });
};

const createDrawerNavigator = function(screensArray, contentComponent) {
    var screensObject = {};
    screensArray.forEach(function(screen) {
        screensObject[screen.key] = {
            screen: screen.screen,
            navigationOptions: {
                drawerLabel: screen.label,
                drawerIcon: screen.icon
            }
        };
    });
    return DrawerNavigator(screensObject, {
        contentComponent: contentComponent,
        contentOptions: {
            activeBackgroundColor: "#DCE9EB"
        },
        drawerOpenRoute: "DrawerOpen",
        drawerCloseRoute: "DrawerClose",
        drawerToggleRoute: "DrawerToggle"
    });
};

export default { createStackNavigator, createDrawerNavigator };
