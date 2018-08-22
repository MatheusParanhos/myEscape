import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Onboarding from '../components/Onboarding/Onboarding'
interface Props {}
export default class OnboardingScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.container}><Onboarding/></View>
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
