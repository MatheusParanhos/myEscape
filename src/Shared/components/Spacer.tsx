import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { fontFamiliy, colors, fontWeight } from "../theme";
interface SpacerProps {
    title: string
}
export default class Spacer extends Component <SpacerProps>{
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 0.5, justifyContent:'center', alignItems: 'center'}} >
            <Text style={styles.text}>{this.props.title}</Text>
        </View>
        <View style={{ flex: 0.7,  }} />
        <View style={{ flex: 0.5,  }} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    height: 40,
    // backgroundColor: "blue",
    // flex:1
  },
  text:{
      fontFamily:fontFamiliy.primary,
      color:colors.primary,
      fontWeight: '500'
  }
});
