import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { colors } from "../../Shared/theme";
import FontAwesome from "react-native-vector-icons/FontAwesome";
interface AttractionRateProps {
  rate: Number;
}

export default class AttractionsRate extends Component<AttractionRateProps> {
  renderStar = () => {
    if (this.props.rate < 1) {
      return (
        <View style={styles.starContainer}>
          <FontAwesome name={"star-half-full"} size={25} color={colors.gold}/>
        </View>
      );
    }
    if (this.props.rate > 1 && this.props.rate < 2) {
      return (
        <View style={styles.container}>
          <View style={styles.starContainer}>
            <FontAwesome name={"star"} size={25} color={colors.gold}/>
          </View>
          <View style={styles.starContainer}>
            <FontAwesome name={"star-half-full"} size={25} color={colors.gold}/>
          </View>
        </View>
      );
    }
    if (this.props.rate > 2 && this.props.rate < 3) {
      return (
        <View style={styles.container}>
          <View style={styles.starContainer}>
            <FontAwesome name={"star"} size={25} color={colors.gold}/>
          </View>
          <View style={styles.starContainer}>
            <FontAwesome name={"star"} size={25} color={colors.gold}/>
          </View>
          <View style={styles.starContainer}>
            <FontAwesome name={"star-half-full"} size={25} color={colors.gold}/>
          </View>
        </View>
      );
    }
    if (this.props.rate > 3 && this.props.rate < 4) {
      return (
        <View style={styles.container}>
          <View style={styles.starContainer}>
            <FontAwesome name={"star"} size={25} color={colors.gold}/>
          </View>
          <View style={styles.starContainer}>
            <FontAwesome name={"star"} size={25} color={colors.gold}/>
          </View>
          <View style={styles.starContainer}>
            <FontAwesome name={"star"} size={25} color={colors.gold}/>
          </View>
          <View style={styles.starContainer}>
            <FontAwesome name={"star-half-full"} size={25} color={colors.gold}/>
          </View>
        </View>
      );
    }
    if (this.props.rate > 4 && this.props.rate < 5) {
      return (
        <View style={styles.container}>
          <View style={styles.starContainer}>
            <FontAwesome name={"star"} size={25} color={colors.gold}/>
          </View>
          <View style={styles.starContainer}>
            <FontAwesome name={"star"} size={25} color={colors.gold}/>
          </View>
          <View style={styles.starContainer}>
            <FontAwesome name={"star"} size={25} color={colors.gold}/>
          </View>
          <View style={styles.starContainer}>
            <FontAwesome name={"star"} size={25} color={colors.gold}/>
          </View>
          <View style={styles.starContainer}>
            <FontAwesome name={"star-half-full"} size={25} color={colors.gold}/>
          </View>
        </View>
      );
    }
    if (this.props.rate === 5) {
      return (
        <View style={styles.container}>
          <View style={styles.starContainer}>
            <FontAwesome name={"star"} size={25} />
          </View>
          <View style={styles.starContainer}>
            <FontAwesome name={"star-half-full"} size={25} />
          </View>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <View style={styles.starContainer}>
          <FontAwesome name={"star"} size={25} />
        </View>
        <View style={styles.starContainer}>
          <FontAwesome name={"star"} size={25} />
        </View>
        <View style={styles.starContainer}>
          <FontAwesome name={"star"} size={25} />
        </View>
        <View style={styles.starContainer}>
          <FontAwesome name={"star-half-full"} size={25} />
        </View>
      </View>
    );
  };
  render() {
    return <View style={styles.container}>{this.renderStar()}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //  backgroundColor: "blue",
    flexDirection: "row",
    alignItems: "center"
  },
  starContainer: {
    // flex: 1,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    width: 25
    // backgroundColor:'blue'
  }
});
