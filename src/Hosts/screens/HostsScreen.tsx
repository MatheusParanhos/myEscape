import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { colors } from "../../Shared/theme";
import Header from "../../Saved/components/Header";
import Host from "../components/Host";

interface Props {}
export default class HostsScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Header title={"Hospedagens"} />
        <Host
          hostTitle={"Hostel vrau"}
          onSavePress={() => console.log("salvou")}
          location={"Alto Paraiso"}
          rate={3}
        />
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
