import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { colors } from "../../Shared/theme";
import Header from "../../Shared/components/Header";
import SavedContainer from "../containers/SavedContainer";
import Spacer from "../../Shared/components/Spacer";

interface Props {}
export default class SaveScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Header title={"Salvos"} filter={false} />
        <Spacer title={"Salvos"} />
        <SavedContainer/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
