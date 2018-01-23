import React from "react";
import Navigation from "../navigators";
import SignUpScreen from "./SignUp";
import SignInScreen from "./SignIn";

export default class SignUp extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let SignUpStack = Navigation.createStackNavigator([
            SignUpScreen,
            SignInScreen
        ]);
        return (
            <SignUpStack
                screenProps={{ goBack: this.props.navigation.goBack }}
            />
        );
    }
}
