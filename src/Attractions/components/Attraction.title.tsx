import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { colors, fontSize, fontWeight } from "../../Shared/theme";

interface AttractionTitleProps {}

export default class AttractionTitle extends Component<AttractionTitleProps> {
  render() {
    return <Text style={styles.text}>Cachoeira xablau</Text>;
  }
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: "100%",
    backgroundColor: colors.primary
  },
  text: {
    fontSize: fontSize.primary,
    fontWeight: '600',
    color: colors.darkGray
  }
});
