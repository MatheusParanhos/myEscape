import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Navigation } from "../../../Navigation";
import { NavigationScreenProps } from 'react-navigation'
interface Props extends NavigationScreenProps <any> {}
export default class Splash extends Component<Props> {
    constructor() {
        // @ts-ignore
        super()
        this.state = {
          ready: false
        }
      }
    componentDidMount (){
        setTimeout(() => {this.props.navigation.navigate('Home')}, 2000)
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
