import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { FacebookButton } from "../../Shared/components/Button";
import { colors } from "../../Shared/theme";
import Header from "../components/Header";
import Attraction from "../components/Attraction";
interface Props {}
export default class AttractionsScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Header title={"Atrações"} />
        <Attraction/>
        <Attraction/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
