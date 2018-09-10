import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationScreenProps } from "react-navigation";
import { AsyncStorage } from "react-native";
import { colors, fontFamiliy } from "../theme";
import initializeDatabase from "../../Attractions/functions/initDatabase";

interface Props extends NavigationScreenProps<any> {}

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
    // AsyncStorage.clear();

    this.getUserInfo();
  }
  getUserInfo() {
    AsyncStorage.getItem("userInfo").then(response => {
      if (response === null) {
        this.setState({ firstTime: true });
        initializeDatabase()
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
        <Text style={styles.text}>my escape</Text>
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
  },
  text: {
    color: colors.white,
    fontSize: 60,
    fontWeight: "600",
    fontFamily: fontFamiliy.type,
    padding:30
  }
});
