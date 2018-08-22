import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { colors, fontSize, fontFamiliy } from "../../Shared/theme";

interface HostLocationProps {
  location: string;
}

export default class HostLocation extends Component<
  HostLocationProps
> {
  render() {
    return <Text style={styles.text}>{this.props.location}</Text>;
  }
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: "100%",
    backgroundColor: colors.primary
  },
  text:{
    fontSize: fontSize.smaller,
    fontWeight: '500',
    color: colors.lightGray,
    fontFamily:fontFamiliy.primary
  }
});
