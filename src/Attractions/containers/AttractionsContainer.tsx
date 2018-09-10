import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";
import attractionsData from "../data/attractions.json";
import Attraction from "../components/Attraction";
import { AttractionsContext } from "./AttractionsContext";
import { AttractionSchema } from "../data/AttractionsModel";
import fs from "react-native-fs";
import Realm from "realm";
import { UserContext } from "../../User/UserContext";

export default class AttractionsContainer extends Component {
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
      <UserContext.Consumer>
        {({ saveAttraction }) => (
          <AttractionsContext.Consumer>
            {({ attractions }) => (
              <FlatList
                data={attractions}
                style={{ flex: 1 }}
                renderItem={({ item }) => {
                  return (
                    <Attraction
                      attractionTitle={item.title}
                  //    source={`${item.attractionImage}`}
                      onSavePress={() => {
                        console.log(item);
                        saveAttraction(item)
                        // setAttraction(item);
                      }}
                      location={item.attractionLocation}
                      rate={item.attractionRate}
                    />
                  );
                }}
              />
            )}
          </AttractionsContext.Consumer>
        )}
      </UserContext.Consumer>
    );
  }
}
