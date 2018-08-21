import React, { Component,  } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { colors } from '../../Shared/theme';

interface HostTitleProps {

}

export default class HostTitle extends Component <HostTitleProps>{
  render() {
    return (
      <Text>Cachoeira xablau</Text>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      height: 200,
      width: "100%",
      backgroundColor: colors.primary
    },
  });