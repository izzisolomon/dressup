import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const SignedOut = props => {
    const { navigate } = props.navigation;
    return (
        <TouchableOpacity onPress={() => navigate("RootSignUp")}>
            <View
                style={{
                    backgroundColor: "#E3E3E4",
                    height: 140,
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <Icon name={ios - person - add} size={40} />
                <Text style={{ fontSize: 15, padding: 7 }}>Sign Up</Text>
            </View>
        </TouchableOpacity>
    );
};
export default SignedOut;
