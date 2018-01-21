import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Top Looks",
    headerLeft: (
      <View style={{ paddingLeft: 15 }}>
        <Icon
          size={20}
          name={"menu"}
          color="white"
          onPress={() => navigation.navigate("DrawerOpen")}
        />
      </View>
    )
  });

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}
