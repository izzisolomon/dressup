import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Database from "./firebase/database";
import Icon from "react-native-vector-icons/Ionicons";

const SignedIn = props => {
    let user = Database.getCurrentUser();
    let email = user != null ? user.email : "";
    return (
        <TouchableOpacity onPress={() => Database.signOut()}>
            <View
                style={{
                    backgroundColor: "#E3E3E4",
                    height: 140,
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <Icon name={"ios-person-add-outline"} size={40} />
                <Text style={{ fontSize: 15, padding: 7 }}>
                    {`Sign Out (${email})`}
                </Text>
            </View>
        </TouchableOpacity>
    );
};
export default SignedIn;
