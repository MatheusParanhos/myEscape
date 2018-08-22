import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Header from "../../Shared/components/Header";
import Attraction from "../components/Attraction";
import Spacer from "../../Shared/components/Spacer";
import AttractionsContainer from "../containers/AttractionsContainer";

interface Props {}

export default class AttractionsScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Header title={"Atrações"} filter/>
        <Spacer title={'Atrações'} />
        <AttractionsContainer />
        {/* <Attraction
          attractionTitle={"Vista secreta"}
          onSavePress={() => console.log("salvou")}
          location={"São Jorge"}
          rate={3}
          source={require('../../Shared/medias/chapada2.png')}
        />
        <Attraction
          attractionTitle={"Cachoeira do segredo"}
          onSavePress={() => console.log("clicko")}
          location={"São Jorge"}
          rate={4.2}
          source={require('../../Shared/medias/chapada3.png')}
        /> */}
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
