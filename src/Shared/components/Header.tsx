import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { colors, deviceWidth, fontSize, fontWeight } from "../theme";
import FontAwesome from "react-native-vector-icons/FontAwesome";
interface HeaderProps {
  title: string;
  filter: boolean;
}
export default class Header extends Component<HeaderProps> {
  renderIcon() {
    if (this.props.filter) {
      return <FontAwesome name={"th-list"} size={25} color={colors.darkGray} />;
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 0.5, width: "100%" }} />
        <View
          style={{
            flex: 1,
            width: "100%",
            alignItems: "center",
            justifyContent: "flex-end",
            marginBottom: 15
          }}
        >
          <Text
            style={{
              color: colors.darkGray,
              fontSize: fontSize.header,
              fontWeight: '600'
            }}
          >
            {this.props.title}{" "}
          </Text>
        </View>
        <View
          style={{
            flex: 0.5,
            alignItems: "center",
            width: "100%",
            justifyContent: "flex-end",
            marginBottom: 10
          }}
        >
          {this.renderIcon()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    top: 0,
    height: 70,
    flexDirection: "row"
  },
  icon: {
    position: "absolute",
    top: 25,
    left: deviceWidth - 50
  }
});
