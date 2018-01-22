import React from "react";
import { SafeAreaView } from "react-native";
import { DrawerItems } from "react-navigation";
import SignedIn from "./signedin";
import SignedOut from "./signedout";

const SignedOutDrawer = props => {
    return (
        <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
            <SignedOut {...props} />
            <DrawerItems {...props} />
        </SafeAreaView>
    );
};

const SignedInDrawer = props => {
    return (
        <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
            <SignedIn {...props} />
            <DrawerItems {...props} />
        </SafeAreaView>
    );
};

export { SignedInDrawer, SignedOutDrawer };
