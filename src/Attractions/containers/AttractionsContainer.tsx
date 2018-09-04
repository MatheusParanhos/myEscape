import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";
import attractionsData from "../data/attractions.json";
import Attraction from "../components/Attraction";
import { AttractionContext } from "./AttractionsContext";

export default class AttractionsContainer extends Component {
  render() {
    // console.log({attractionsData})
    // console.log(attractionsData)
    return (
      <AttractionContext.Consumer>
        {({ setAttraction }) => (
          <FlatList
            data={attractionsData}
            style={{ flex: 1 }}
            renderItem={({ item }) => {
              return (
                <Attraction
                  attractionTitle={item.attractionTitle}
                  source={`${item.attractionImage}`}
                  onSavePress={() => {console.log(item)
                  setAttraction(item)
                }}
                  location={item.attractionLocation}
                  rate={item.attractionRate}
                />
              );
            }}
          />
        )}
      </AttractionContext.Consumer>
    );
  }
}
