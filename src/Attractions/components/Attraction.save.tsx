import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableWithoutFeedback, TouchableHighlight } from "react-native";
import { colors } from "../../Shared/theme";
import FontAwesome from "react-native-vector-icons/FontAwesome";
interface AttractionSaveProps {
  onPress: any;
  // isPressed: any
}
interface AttractionSaveState {
  isPressed: boolean;
}

export default class AttractionSave extends Component<
  AttractionSaveProps,
  AttractionSaveState
> {
  constructor() {
    // @ts-ignore
    super();
    this.state = {
      isPressed: false
    };
  }
  renderIcon = () => {
    if (this.state.isPressed === true) {
      return (
        <FontAwesome name={"bookmark"} size={30} color={colors.darkGray} />
      );
    } else {
      return (
        <FontAwesome name={"bookmark-o"} size={30} color={colors.darkGray} />
      );
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.up}>
       
          <TouchableWithoutFeedback onPress={() => {this.setState({isPressed: true});}}>
            {this.renderIcon()}
          </TouchableWithoutFeedback>

        </View>
        <View style={styles.down} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  up: {
    flex: 1,
    paddingRight: 30,
    // backgroundColor:'red',
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  down: {
    flex: 0.5
  }
});
