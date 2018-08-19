import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { colors } from "../../Shared/theme";
import AttractionImage from "./Attraction.image";
import AttractionTitle from "./Attraction.title";
import AttractionRate from "./Attraction.rate";
import AttractionLocation from "./Attraction.location";
import AttractionSave from "./Attraction.save";
interface AttractionProps {}

export default class Attraction extends Component<AttractionProps> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <AttractionImage />
        </View>
        <View style={styles.centralContainer}>
          <View style={styles.titleContainer}>
            <AttractionTitle />
          </View>
          <View style={styles.rateContainer}>
            <AttractionRate rate={4.2} />
          </View>
          <View style={styles.locationContainer} >
            <AttractionLocation location={'Alto Paraiso'}/>
          </View>
          
        </View>
        <View style={styles.saveContainer} >
            <AttractionSave onPress={() => console.log('pressed')}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 120,
    width: "100%",
    //  justifyContent:'center',
    // backgroundColor: colors.primary,
    flexDirection: "row"
  },
  imageContainer: {
    flex: 0.3,
    // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center"
  },
  centralContainer: {
    flex: 0.5,
    // backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center"
  },
  saveContainer: {
    flex: 0.2,
    // backgroundColor: "yellow",
    
  },
  titleContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "flex-end",
    width: "100%"
    // backgroundColor:'yellow'
  },
  rateContainer: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 10,
    width: "100%"
    // backgroundColor:'red'
  },
  locationContainer: {
    flex: 1,
    marginLeft: 10,
    width: "100%",
//    / justifyContent:'center',
    // backgroundColor: "orange"
  },
  priceContainer: {
    flex: 1,
    width: "100%",
    // backgroundColor: "teal"
  }
});