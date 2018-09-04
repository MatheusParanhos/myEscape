import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { colors, deviceWidth, fontSize, fontWeight } from "../../Shared/theme";

interface SavedProps {
    title: string
}
export default class Saved extends Component <SavedProps> {
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
    flex:1,
    width:'100%',
    backgroundColor:'red'
  },
  text: {
    marginBottom: 20,
    fontSize: fontSize.header,
    color: colors.darkGray,
    fontWeight: fontWeight.header
  }
});
