import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { colors } from "../../Shared/theme";
interface AvatarProps {
  props: any;
}

export const Avatar = props => {
  const { onAvatarPress, source } = props;
  return (
    <TouchableOpacity onPress={onAvatarPress}>
      <View style={styles.container}>
        <Image
          resizeMode="contain"
          resizeMethod="scale"
          style={styles.image}
          source={{uri:source.toString()}}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 90,
    height: 90,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 8
  },
  image: {
    width: 100, //
    height: 100, //
    borderRadius: 50, //
    margin: 8
  }
});
