import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { deviceHeight, colors, fontFamiliy } from "../../theme";
import { OnboardingTabView } from "./OnboardingTabView";

interface OnboardingTextProps {
  navigation: any;
}

export default class OnboardingTexts extends Component<OnboardingTextProps> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>my escape</Text>
        </View>
        <View style={styles.tabViewContainer}>
          <OnboardingTabView {...this.props} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    height: deviceHeight,
    alignItems: "center",
    zIndex: 100
  },
  logoContainer: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "flex-end"
  },
  logoText: {
    color: colors.white,
    fontSize: 60,
    fontWeight: "600",
    fontFamily: fontFamiliy.type
  },
  tabViewContainer: { flex: 1, width: "100%" }
});
