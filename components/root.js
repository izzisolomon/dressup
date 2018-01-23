import React from "react";
import Database from "./firebase/database";
import { StackNavigator, DrawerNavigator, DrawerItems } from "react-navigation";
import Navigation from "./navigators";
import HomeScreen from "./home/";
import { SignedInDrawer, SignedOutDrawer } from "./drawer";
import Icon from "./icon";
import SignUpScreen from "./SignUp/";

const Home = {
    key: "DrawerHome",
    screen: HomeScreen,
    label: "Home",
    icon: ({ tintColor, focused }) => (
        <Icon
            iconName={focused ? "ios-home" : "ios-home-outline"}
            tintColor={tintColor}
        />
    )
};

export default class RootComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { user: null };
        this.onAuthStateChanged = this.onAuthStateChanged.bind(this);
        Database.onAuthStateChanged(this.onAuthStateChanged);
    }

    onAuthStateChanged(user) {
        this.setState({ user: user });
    }

    render() {
        var RootDrawer;
        if (this.state.user == null) {
            RootDrawer = Navigation.createDrawerNavigator(
                [Home],
                SignedOutDrawer
            );
        } else {
            RootDrawer = Navigation.createDrawerNavigator(
                [Home],
                SignedInDrawer
            );
        }
        let RootStack = StackNavigator(
            {
                RootDrawer: {
                    screen: RootDrawer
                },
                RootSignUp: {
                    screen: SignUpScreen
                }
            },
            {
                mode: "modal",
                headerMode: "none"
            }
        );
        return <RootStack />;
    }
}
