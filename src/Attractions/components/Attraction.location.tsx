import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { colors, fontSize } from "../../Shared/theme";

interface AttractionLocationProps {
  location: string;
}

export default class AttractionLocation extends Component<
  AttractionLocationProps
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
    color: colors.lightGray
  }
});
