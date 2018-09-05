import React, { Component } from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";
import OnboardingVideo from "../components/Onboarding/Video";
import { deviceHeight } from "../theme";
import OnboardingTexts from "../components/Onboarding/OnboardingTexts";
import SplashPlaceholder from "../components/SplashPlaceholder";
import { OnboardingTabView } from "../components/Onboarding/OnboardingTabView";

interface OnboardingContainerProps {
  navigation: any;
}
interface OnboardingContainerState {
  ready: Boolean;
}
export default class OnboardingContainer extends Component<
  OnboardingContainerProps,
  OnboardingContainerState
> {
  timer: number;
  componentDidMount() {
    console.log(this.props);
  }
  constructor() {
    // @ts-ignore
    super();
    this.state = {
      ready: false
    };
  }
  handleReady = () => {
    this.timer = setTimeout(() => {
      this.setState({ ready: true });
    }, 2500);
  };
  render() {
    return (
      <View style={styles.container}>
        {this.state.ready === true && <OnboardingTexts {...this.props} />}
        <OnboardingVideo isReady={this.handleReady} />
        <SplashPlaceholder />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  }
});
