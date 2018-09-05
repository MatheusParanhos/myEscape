import React, { Component } from "react";
import { View } from "react-native";
import Video from "react-native-video";
import { deviceHeight } from "../../theme";


interface VideoProps {
    source?: string
    style?: any
    repeat?: boolean
    muted?: boolean
    isReady: () => void
}

export default class OnboardingVideo extends Component <VideoProps> {
  render() {
    return (
      <View style={{ flex: 1, width: "100%", justifyContent:'center', alignItems:'center' }}>
        <Video
          source={require("../../medias/entrance2.mov")}
            onLoad={
              this.props.isReady
            }
          paused={false}
          style={{
            height:deviceHeight,
            width:1900
          }}
          repeat={true}
          muted={true}
        />
      </View>
    );
  }
}
