import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, TimerMixin } from "react-native";
import { Navigation } from "../../../Navigation";
import { NavigationScreenProps } from "react-navigation";
import { AsyncStorage } from "react-native";
import { colors, fontFamiliy } from "../theme";

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
      if (response === null) {
        this.setState({ firstTime: true });
        AsyncStorage.setItem("userInfo", "user's first entry to the App!");
        this.timer = setTimeout(() => {
          this.props.navigation.navigate("Onboarding");
        }, 2000);
      } else {
        this.timer = setTimeout(() => {
          this.props.navigation.navigate("Atrações");
        }, 200);
      }
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text
            style={{
              color: colors.white,
              fontSize: 60,
              fontWeight: '600',
              fontFamily: fontFamiliy.type,
            }}
          >my escape</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary
  }
});
