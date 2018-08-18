import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { colors } from '../../Shared/theme';

interface Props {}
export default class RidesScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.container}><Text>RidesScreen</Text></View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
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
