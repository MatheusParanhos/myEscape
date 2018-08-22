import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, ScrollView } from "react-native";
import { colors } from "../../Shared/theme";
import Header from "../../Shared/components/Header";
import Host from "../components/Host";
import Spacer from "../../Shared/components/Spacer";

interface Props {}
export default class HostsScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Header title={"Hospedagens"} filter/>
        
        <Spacer title={'Hospedagens'}/>
        <Host
          hostTitle={"Hostel Aventura"}
          onSavePress={() => console.log("salvou")}
          location={"Alto Paraiso"}
          rate={3}
          source={require('../../Shared/medias/hostel1.2.png')}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.white
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
