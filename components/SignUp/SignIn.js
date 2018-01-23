import React, { Component } from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Image,
    Platform
} from "react-native";
import Alert from "../Alert/Alert";
import Database from "../firebase/database";

export default class SignIn extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Sign In"
    });

    input = {
        email: "",
        password: ""
    };

    getEmail = text => {
        this.input.email = text;
    };

    getPassword = text => {
        this.input.password = text;
    };

    validateEmail(email) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    }

    Submit() {
        let { email, password } = this.input;
        let { goBack, navigate } = this.props.navigation;
        if (this.validateEmail(email) == false) {
            return Alert(null, "Please enter a valid email address");
        }
        Database.signIn(email, password).then(
            function(user) {
                if (Platform.OS === "web") {
                    navigate("/");
                } else {
                    goBack();
                }
            },
            function(error) {
                return Alert(null, error.message);
            }
        );
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={styles.label}>Email</Text>
                <View style={styles.textinput}>
                    <TextInput
                        onChangeText={this.getEmail}
                        style={{
                            height: 40,
                            borderColor: "#E3E3E4",
                            borderWidth: 1,

                            borderRadius: 3
                        }}
                        placeholder="Email"
                        autoCorrect={false}
                        autoCapitalize="none"
                    />
                </View>
                <Text style={styles.label}>Password</Text>
                <View style={styles.textinput}>
                    <TextInput
                        onChangeText={this.getPassword}
                        style={{
                            height: 40,
                            borderColor: "#E3E3E4",
                            borderWidth: 1,

                            borderRadius: 3
                        }}
                        placeholder="Password"
                        autoCorrect={false}
                        autoCapitalize="none"
                    />
                </View>

                <View>
                    <TouchableOpacity
                        style={styles.submitButton}
                        onPress={() => this.Submit()}
                    >
                        <Text style={styles.submitButtonText}> SIGN IN </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.line}>
                    <Text
                        style={{ color: "#4780C4", paddingLeft: 7 }}
                        onPress={() => navigate("ForgotPass")}
                    >
                        Forgot Password?{" "}
                    </Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    icon: {
        paddingTop: 4
    },
    line: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        padding: 10
    },
    title: {
        fontWeight: "bold",
        padding: 10,
        fontSize: 18
    },
    textinput: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 10,
        alignSelf: "stretch"
    },
    label: {
        color: "#333333",
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 7.5,
        textAlign: "left",
        alignSelf: "stretch"
    },
    submitButton: {
        backgroundColor: "#337ED6",
        paddingLeft: 80,
        paddingRight: 80,
        padding: 10,
        margin: 15,
        height: 40,
        borderRadius: 5
    },
    submitButtonText: {
        color: "white"
    }
});
