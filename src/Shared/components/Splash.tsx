import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, TimerMixin } from "react-native";
import { Navigation } from "../../../Navigation";
import { NavigationScreenProps } from "react-navigation";
import { AsyncStorage } from "react-native";

interface Props extends NavigationScreenProps<any> {}
var TimerMixin = require("react-timer-mixin");

export default class Splash extends Component<Props> {
  timer: number;
  constructor() {
    // @ts-ignore
    super();
    this.state = {
      ready: false,
      firstTime: null
    };
  }
  componentWillUnmount() {
    clearTimeout(this.timer);
  }
  componentDidMount() {
    this.getUserInfo();
  }
  getUserInfo() {
    // AsyncStorage.clear()
    AsyncStorage.getItem("userInfo").then(response => {
      console.log("resposta:", response);
      if (response === null) {
        this.setState({ firstTime: true });
        AsyncStorage.setItem("userInfo", "user's first entry to the App!");
        this.timer = setTimeout(() => {
          this.props.navigation.navigate("Onboarding");
        }, 2000);
      } else {
        this.timer = setTimeout(() => {
          this.props.navigation.navigate("Home");
        }, 2000);
      }
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Logo</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
