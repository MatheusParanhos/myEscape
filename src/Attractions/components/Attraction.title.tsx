import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { colors, fontSize, fontWeight, fontFamiliy } from "../../Shared/theme";

interface AttractionTitleProps {
  title: string
}

export default class AttractionTitle extends Component<AttractionTitleProps> {
  render() {
    return <Text style={styles.text}>{this.props.title}</Text>;
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
    fontWeight: '500',
    color: colors.darkGray,
    fontFamily:fontFamiliy.primary
  }
});
