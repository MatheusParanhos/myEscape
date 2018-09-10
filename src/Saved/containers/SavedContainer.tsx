import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";
import { AttractionsContext } from "../../Attractions/containers/AttractionsContext";
import fs from "react-native-fs";
import Realm from "realm";
import { UserContext } from "../../User/UserContext";
import Attraction from "../../Attractions/components/Attraction";

export default class SavedContainer extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     attractions: {}
  //   };
  // }

  render() {
    // console.log({attractionsData})
    // console.log(attractionsData)
    return (
          <AttractionsContext.Consumer>
            {({ savedAttractions, saveAttraction }) => (
              <FlatList
                data={savedAttractions}
                style={{ flex: 1 }}
                renderItem={({ item }) => {
                  return (
                    <Attraction
                      attractionTitle={item.title}
                      source={`${item.image}`}
                      onSavePress={() => {
                        // console.log(item);
                        saveAttraction(item)
                        // setAttraction(item);
                      }}
                      location={item.city}
                      rate={item.rate}
                    />
                  );
                }}
              />
            )}
          </AttractionsContext.Consumer>
    );
  }
}
