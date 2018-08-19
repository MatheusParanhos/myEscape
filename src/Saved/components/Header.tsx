import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { colors, deviceWidth, fontSize, fontWeight } from "../../Shared/theme";

interface HeaderProps {
    title: string
}
export default class Header extends Component <HeaderProps> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> {this.props.title} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    top: 0,
    height: 70,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
   //  backgroundColor: colors.primary
  },
  text: {
    marginBottom: 20,
    fontSize: fontSize.header,
    color: colors.darkGray,
    fontWeight: fontWeight.header
  }
});
