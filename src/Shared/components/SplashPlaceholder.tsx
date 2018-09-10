import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, TimerMixin } from "react-native";
import { Navigation } from "../../../Navigation";
import { NavigationScreenProps } from "react-navigation";
import { AsyncStorage } from "react-native";
import { colors, fontFamiliy, deviceHeight, deviceWidth } from "../theme";

var TimerMixin = require("react-timer-mixin");

export default class SplashPlaceholder extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{
            color: colors.white,
            fontSize: 60,
            fontWeight: "600",
            fontFamily: fontFamiliy.type,
            padding: 50
          }}
        >
          my escape
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    height: deviceHeight,
    width: deviceWidth,
    justifyContent: "center",
    alignItems: "center",
    zIndex: -1,
    backgroundColor: colors.primary
  }
});
