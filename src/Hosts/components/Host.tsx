import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { colors } from "../../Shared/theme";
import HostImage from "./Host.image";
import HostTitle from "./Host.title";
import HostRate from "./Host.rate";
import HostLocation from "./Host.location";
import HostSave from "./Host.save";

interface HostProps {
  hostTitle: string
  onSavePress: any
  location: string
  rate: number
}

export default class Host extends Component<HostProps> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <HostImage />
        </View>
        <View style={styles.centralContainer}>
          <View style={styles.titleContainer}>
            <HostTitle title={this.props.hostTitle}/>
          </View>
          <View style={styles.rateContainer}>
            <HostRate rate={this.props.rate} />
          </View>
          <View style={styles.locationContainer} >
            <HostLocation location={this.props.location}/>
          </View>
          
        </View>
        <View style={styles.saveContainer} >
            <HostSave onPress={this.props.onSavePress}/>
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
