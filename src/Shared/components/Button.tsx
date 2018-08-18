import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { deviceWidth, colors } from "../theme";
import LinearGradient from "react-native-linear-gradient";
import Entypo from "react-native-vector-icons/Entypo"
interface ButtonProps {
  title: String;
  onPress: any
}
interface GradientButtonProps {
  title: String;
  firstColor: string;
  secondColor: string;
  onPress: any
}

export class Button extends Component<ButtonProps> {
  render() {
    return (
      <TouchableOpacity style={styles.buttonContainer}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ color: colors.white }}> {this.props.title} </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
export class OutlinedButton extends Component<ButtonProps> {
  render() {
    return (
      <TouchableOpacity style={styles.outlineContainer} onPress={this.props.onPress}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text style={{ color: colors.primary, fontWeight: "bold" }}>
            {" "}
            {this.props.title}{" "}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
export class FacebookButton extends Component<GradientButtonProps> {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <LinearGradient start={{x:0, y:0}} end={{x:1, y:1}} colors={["#3e33cc", "#0f0584"]}>
          <View style={styles.facebookContainer}>
            <Entypo name={'facebook'} size={30} color={colors.white} style={{marginRight:10 }}/>
            <Text style={{ color: colors.white, fontWeight:'bold' }}> {this.props.title} </Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    );
  }
}
export class GradientButton extends Component<GradientButtonProps> {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <LinearGradient
          colors={[this.props.firstColor, this.props.secondColor]}
        >
          <View style={styles.buttonContainer}>
            <Text style={{ color: colors.white }}> {this.props.title} </Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  buttonContainer: {
    height: 50,
    width: deviceWidth / 1.3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary
  },
  facebookContainer: {
    height: 50,
    width: deviceWidth / 1.3,
    justifyContent: "center",
    alignItems: "center",
    flexDirection:'row'
    // backgroundColor: colors.primary
  },
  outlineContainer: {
    height: 50,
    width: deviceWidth / 1.3,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: colors.primary
    // borderRadius:100
    // backgroundColor: colors.primary
  }
});
