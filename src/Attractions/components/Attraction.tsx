import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { colors } from "../../Shared/theme";
import AttractionImage from "./Attraction.image";
import AttractionTitle from "./Attraction.title";
import AttractionRate from "./Attraction.rate";
import AttractionLocation from "./Attraction.location";
import AttractionSave from "./Attraction.save";
// import attractionsData from '../data/attractions.json'
interface AttractionProps {
  attractionTitle: string
  onSavePress: any
  location: string
  rate: number
  source: any
}

export default class Attraction extends Component<AttractionProps> {
  componentDidMount() {
   // console.log(attractionsData)
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <AttractionImage source={this.props.source}/>
        </View>
        <View style={styles.centralContainer}>
          <View style={styles.titleContainer}>
            <AttractionTitle title={this.props.attractionTitle}/>
          </View>
          <View style={styles.rateContainer}>
            <AttractionRate rate={this.props.rate} />
          </View>
          <View style={styles.locationContainer} >
            <AttractionLocation location={this.props.location}/>
          </View>
          
        </View>
        <View style={styles.saveContainer} >
            <AttractionSave onPress={this.props.onSavePress}/>
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
