import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableHighlight
} from "react-native";
import { colors } from "../../Shared/theme";
import FontAwesome from "react-native-vector-icons/FontAwesome";
interface HostSaveProps {
  onPress: any;
  // isPressed: any
}
interface HostSaveState {
  isPressed: boolean;
}

export default class HostSave extends Component<
  HostSaveProps,
  HostSaveState
> {
  constructor() {
    // @ts-ignore
    super();
    this.state = {
      isPressed: false
    };
  }
  handlePress = () => {
    this.props.onPress();
    if (this.state.isPressed === true) {
      this.setState({ isPressed: false });
    } else {
      this.setState({ isPressed: true });
    }
  };
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
          <TouchableWithoutFeedback
            onPress={() => {
              this.handlePress();
            }}
          >
            {this.renderIcon()}
          </TouchableWithoutFeedback>
        </View>
        {/* <View style={styles.down} /> */}
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
  }
  // down: {
  //   flex: 0.5
  // }
});
