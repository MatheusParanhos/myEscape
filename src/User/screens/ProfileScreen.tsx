import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { colors, deviceWidth } from '../../Shared/theme';
import { FacebookButton, OutlinedButton } from '../../Shared/components/Button';

interface Props {}
export default class ProfileScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
        <Text>Perfil</Text>
        </View>
        <View style={styles.messageContainer}>
        <Text>Você precisa estar logado para ver o seu perfil</Text>
        </View>
        <View style={styles.buttonContainer}>
        <FacebookButton title={'Login via Facebook'}/>
        <OutlinedButton title={'Login via celular'}/>
        </View>
      </View>
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
 headerContainer:{
   flex:0.3,
   width:deviceWidth,
   alignItems:'center',
   justifyContent:'center'
   // backgroundColor:'red'
 },
 messageContainer:{
   flex:1,
   width:deviceWidth,
   alignItems:'center',
   justifyContent:'center'
   // backgroundColor:'blue',
 },
 buttonContainer:{
   flex:0.8,
   width:deviceWidth,
   alignItems:'center',
   justifyContent:'space-around'
  // backgroundColor:'yellow'
 }
});
