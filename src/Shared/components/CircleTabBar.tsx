import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { TabBarProps } from "react-native-scrollable-tab-view";
import { colors } from "../../Shared/theme";

const styles = StyleSheet.create({
  tabContainer: {
    flex: 1 / 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  }
});
const CIRCLE_SIZE = 15;
export class CircleTabBar extends React.Component<
  TabBarProps,
  {
    error: any;
  }
> {
  _listener: string = "";
  icons: any;
  isActive: any;
  constructor(props: TabBarProps) {
    super(props);
    this.icons = [];
    this.state = { error: "" };
  }
  render() {
    return (
      <View style={styles.tabContainer}>
        {(this.props.tabs || []).map((tab, i) => {
          return (
            <View>
              {i === 1 ? (
                <View
                  style={{
                    height:
                      this.props.activeTab === i
                        ? CIRCLE_SIZE
                        : CIRCLE_SIZE / 2,
                    width:
                      this.props.activeTab === i
                        ? CIRCLE_SIZE
                        : CIRCLE_SIZE / 2,
                    borderRadius:
                      this.props.activeTab === i
                        ? CIRCLE_SIZE / 2
                        : CIRCLE_SIZE / 4,
                    backgroundColor:
                      this.props.activeTab === i
                        ? colors.primary
                        : colors.lightGray,
                    margin: 10
                  }}
                />
              ) : (
                undefined
              )}
              {i === 2 ? (
                <View
                  style={{
                    height:
                      this.props.activeTab === i
                        ? CIRCLE_SIZE
                        : CIRCLE_SIZE / 2,
                    width:
                      this.props.activeTab === i
                        ? CIRCLE_SIZE
                        : CIRCLE_SIZE / 2,
                    borderRadius:
                      this.props.activeTab === i
                        ? CIRCLE_SIZE / 2
                        : CIRCLE_SIZE / 4,
                    backgroundColor:
                      this.props.activeTab === i
                        ? colors.primary
                        : colors.lightGray,
                    margin: 10
                  }}
                />
              ) : (
                undefined
              )}
              {i === 0 ? (
                <View
                  style={{
                    height:
                      this.props.activeTab === i
                        ? CIRCLE_SIZE
                        : CIRCLE_SIZE / 2,
                    width:
                      this.props.activeTab === i
                        ? CIRCLE_SIZE
                        : CIRCLE_SIZE / 2,
                    borderRadius:
                      this.props.activeTab === i
                        ? CIRCLE_SIZE / 2
                        : CIRCLE_SIZE / 4,
                    backgroundColor:
                      this.props.activeTab === i
                        ? colors.primary
                        : colors.lightGray,
                    margin: 10
                  }}
                />
              ) : (
                undefined
              )}
            </View>
          );
        })}
      </View>
    );
  }
}
