import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { colors, deviceWidth, fontFamiliy, fontSize } from "../../Shared/theme";
import Header from "../../Shared/components/Header";
import { FacebookButton, OutlinedButton } from "../../Shared/components/Button";

interface Props {}
export default class RidesScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Header title={'Caronas'} filter={false}/>
        <View style={styles.messageContainer}>
          <Text style={{ fontWeight: "500", fontFamily:fontFamiliy.primary, fontSize:fontSize.big, textAlign:'center' }}>
            Você precisa estar logado para pedir ou dar caronas!
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <FacebookButton
            onPress={() => console.log("pressed")}
            title={"Login via Facebook"}
          />
          <Text
            style={{ margin: 20, fontWeight: "500", color: colors.primary, fontFamily:fontFamiliy.primary, }}
          >
            Ou então:
          </Text>
          <OutlinedButton
            onPress={() => console.log("pressed")}
            title={"Login via celular"}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: "center",
    backgroundColor: colors.white
  },
  messageContainer: {
    flex: 1,
    width: deviceWidth,
    alignItems: "center",
    justifyContent: "center"
    // backgroundColor:'blue',
  },
  buttonContainer: {
    flex: 0.8,
    width: deviceWidth,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor:'yellow'
  }
});
