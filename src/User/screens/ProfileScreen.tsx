import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { colors, deviceWidth, fontFamiliy, fontSize } from "../../Shared/theme";
import { FacebookButton, OutlinedButton } from "../../Shared/components/Button";
import Header from "../../Shared/components/Header";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";

interface Props {}
export default class ProfileScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Header title={"Perfil"} filter={false}/>
        <View style={styles.messageContainer}>
        <Text style={{ marginHorizontal:50, color:colors.lightGray, fontWeight: "500", fontFamily:fontFamiliy.primary, fontSize:fontSize.big, textAlign:'center' }}>
            Você precisa estar logado para ver o seu perfil
          </Text>
          <FontAwesome5Icon name={'smile-wink'} size={35} style={{margin:25}} color={colors.primary}/>
        </View>
        <View style={styles.buttonContainer}>
          <FacebookButton
            onPress={() => console.log("pressed")}
            title={"Login via Facebook"}
          />
          <Text
            style={{
              margin: 20,
              fontWeight: "500",
              color: colors.primary,
              fontFamily: fontFamiliy.primary
            }}
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white
  },
  headerContainer: {
    flex: 0.3,
    width: deviceWidth,
    alignItems: "center",
    justifyContent: "center"
    // backgroundColor:'red'
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
    justifyContent: "center"
    // backgroundColor:'yellow'
  }
});
