import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

export default class IconView extends React.Component {
    render() {
        return <Icon name={this.props.iconName} size={26} />;
    }
}
