import React, { Component,  } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { colors } from '../../Shared/theme';
import { Avatar } from '../../Shared/components/Image';

interface AttractionImageProps {
source: any
}

export default class AttractionImage extends Component <AttractionImageProps>{
  render() {
    return (
        <Avatar source={this.props.source}/>
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