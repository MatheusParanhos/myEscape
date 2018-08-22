import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, PanResponder } from 'react-native';

interface OnboardingProps {}
export default class Onboarding extends Component<OnboardingProps> {
  render() {
    return (
      <View style={styles.container}><Text style={{fontFamily:'ProximaNova-Regular'}}>AAARRONCA</Text></View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
