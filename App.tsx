/**
 * my escapœ
 *
 * @format
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Navigation } from "./Navigation";
import UserContext from "./src/User/UserContext";


console.disableYellowBox = true;

interface Props {}
export default class App extends Component<Props> {
  render() {
    return (
      <UserContext>
        <Navigation />
      </UserContext>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
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
