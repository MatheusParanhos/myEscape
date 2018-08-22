import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Header from "../../Shared/components/Header";
import Attraction from "../components/Attraction";

interface Props {}

export default class AttractionsScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Header title={"Atrações"} filter/>
        <Attraction
          attractionTitle={"Cachoeira Santa Bárbara"}
          onSavePress={() => console.log("salvou")}
          location={"Alto Paraiso"}
          rate={3}

        />
        <Attraction
          attractionTitle={"Cachoeira da fumacinha"}
          onSavePress={() => console.log("clicko")}
          location={"São Jorge"}
          rate={4.2}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
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
