import React, { Component } from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView,
    Alert
} from "react-native";
import { Platform } from "react-native";
import Database from "../firebase/database";

export default class SignUp extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Sign Up",
        headerLeft: (
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <View style={{ paddingLeft: 15 }} />
            </TouchableOpacity>
        )
    });

    input = {
        name: "",
        email: "",
        password0: "",
        password1: ""
    };

    constructor(props) {
        super(props);
        if (Platform.OS !== "web") {
            this.props.navigation.goBack = this.props.screenProps.goBack;
        }
    }

    getName = text => {
        this.input.name = text;
    };

    getEmail = text => {
        this.input.email = text;
    };

    getPassword0 = text => {
        this.input.password0 = text;
    };

    getPassword1 = text => {
        this.input.password1 = text;
    };

    validateEmail(email) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    }

    Submit() {
        let { name, email, password0, password1 } = this.input;
        let goBack = this.props.navigation.goBack;
        if (password0 != password1) {
            return Alert.alert(null, "The passwords don't match");
        } else if (this.validateEmail(email) == false) {
            return Alert.alert(null, "Please enter a valid email address");
        }
        Database.signUp(email, password0).then(
            function(user) {
                goBack();
            },
            function(error) {
                return Alert.alert(null, error.message);
            }
        );
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView onLayout={this.onLayout}>
                <View style={styles.container}>
                    <View
                        style={{
                            flex: 0.25,
                            alignSelf: "stretch",
                            alignItems: "center"
                        }}
                    />
                    <Text style={styles.label}>Name</Text>
                    <View style={styles.textinput}>
                        <TextInput
                            onChangeText={this.getName}
                            style={{
                                height: 40,
                                borderColor: "#E3E3E4",
                                borderWidth: 1
                            }}
                            placeholder="John Doe"
                            returnKeyType="next"
                            autoCorrect={false}
                            autoCapitalize="words"
                        />
                    </View>
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
                            placeholder="john@gmail.com"
                            returnKeyType="next"
                            autoCorrect={false}
                            autoCapitalize="none"
                        />
                    </View>
                    <Text style={styles.label}>Password</Text>
                    <View style={styles.textinput}>
                        <TextInput
                            onChangeText={this.getPassword0}
                            style={{
                                height: 40,
                                borderColor: "#E3E3E4",
                                borderWidth: 1,
                                borderRadius: 3
                            }}
                            placeholder="Password"
                            returnKeyType="next"
                            autoCorrect={false}
                            autoCapitalize="none"
                        />
                    </View>
                    <Text style={styles.label}>Confirm Password</Text>
                    <View style={styles.textinput}>
                        <TextInput
                            onChangeText={this.getPassword1}
                            style={{
                                height: 40,
                                borderColor: "#E3E3E4",
                                borderWidth: 1,
                                borderRadius: 3
                            }}
                            placeholder="Confirm Password"
                            returnKeyType="send"
                            autoCorrect={false}
                            autoCapitalize="none"
                        />
                    </View>
                    <View style={styles.signupButtun}>
                        <TouchableOpacity
                            style={styles.submitButton}
                            onPress={() => this.Submit()}
                        >
                            <Text style={styles.submitButtonText}>SIGN UP</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.line}>
                        <Text>Already have an account?</Text>
                        <Text
                            style={{ color: "#4780C4", paddingLeft: 7 }}
                            onPress={() => navigate("SignIn")}
                        >
                            SIGN IN
                        </Text>
                    </View>
                </View>
            </ScrollView>
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
        padding: 10,
        paddingLeft: 80,
        paddingRight: 80,
        margin: 15,
        height: 40,
        borderRadius: 5
    },
    submitButtonText: {
        color: "white"
    }
});
