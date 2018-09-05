import React, { Component } from "react";
import { StyleSheet } from "react-native";
import OnboardingContainer from "../containers/OnboardingContainer";
interface Props {
  navigation: any;
}
export default class OnboardingScreen extends Component<Props> {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    console.log(this.props);
    return <OnboardingContainer {...this.props} />;
  }
}

