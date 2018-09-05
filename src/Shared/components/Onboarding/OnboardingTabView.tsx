import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import ScrollableTabView from "react-native-scrollable-tab-view";
import { NavigationScreenProps } from "react-navigation";
import { CircleTabBar } from "../CircleTabBar";
import { colors, fontFamiliy } from "../../theme";
import { OutlinedButton } from "../Button";

interface Props extends NavigationScreenProps<any> {
  navigation: any;
}
export class OnboardingTabView extends React.Component<Props> {
  componentDidMount() {
    console.log(this.props);
  }
  source: any;
  render() {
    return (
      <ScrollableTabView
        renderTabBar={props => <CircleTabBar {...props} />}
        style={styles.container}
        tabBarPosition={"bottom"}
        initialPage={0}
        prerenderingSiblingsNumber={Infinity}
      >
        <View>
          <Text style={styles.text1}>
            Aproveite o melhor da Chapada dos Veadeiros
          </Text>
          <View style={styles.spacer} />
          <Text style={[styles.text1,{fontSize:15}]}>Conheça suas belezas</Text>
        </View>
        <View>
          <Text style={styles.text3}>Passeios, acomodações e gastronomia</Text>
          <View style={styles.spacer} />
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={styles.text4}>O app feito para aventureiros!</Text>
          <View style={styles.halfSpacer} />
          <OutlinedButton
            title={"Descubra"}
            name={undefined}
            onPress={() => this.props.navigation.navigate("App")}
          />
          <View style={styles.halfSpacer} />
        </View>
      </ScrollableTabView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    width: "100%",
    justifyContent:'center',
    alignItems:'center'
  },
  text1: {
    color: colors.white,
    fontSize: 25,
    fontWeight: "600",
    fontFamily: fontFamiliy.primaryBold,
    textAlign: "center"
  },
  text2: {
    color: colors.white,
    fontSize: 15,
    fontWeight: "600",
    fontFamily: fontFamiliy.primaryBold,
    textAlign: "center"
  },
  text3: {
    color: colors.white,
    fontSize: 30,
    fontWeight: "600",
    fontFamily: fontFamiliy.primaryBold,
    textAlign: "center"
  },
  text4: {
    color: colors.white,
    fontSize: 30,
    fontWeight: "600",
    fontFamily: fontFamiliy.primaryBold,
    textAlign: "center"
  },
  spacer: {
    height: 30
  },
  halfSpacer: {
    height: 15
  }
});