import React, { Component } from "react";
import { AsyncStorage } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Proptypes from "prop-types";
import { UserSchema } from "./models/UserModel";
import { AttractionSchema } from "../Attractions/data/AttractionsModel";
import fs from "react-native-fs";
import Realm from "realm";
export const UserContext = React.createContext({
  user: "",
  saveUserAttraction: attraction => {
    console.log(attraction);
  }
});
interface UserProviderInterface {
  user: any;
  value: any;
  state: any;
  savedAttractions: any;
}
export default class UserProvider extends Component<UserProviderInterface> {
  constructor() {
    super();
    this.state = {
      user: {}
    };
  }
  componentWillMount() {
    // Open Database with filesystem attached
    let realm = new Realm({
      // path: fs.MainBundlePath + "/default.realm",
      schema: [UserSchema.schema, AttractionSchema.schema]
    });
  }
  handleSaveAttraction(Attraction) {
    console.log("attraction is:", Attraction);
    // Write user
    Realm.open({ schema: [UserSchema.schema, AttractionSchema.schema] }).then(
      realm => {
        realm.write(() => {
          let user = realm.create(
            "User",
            {
              id: 1,
              username: "user",
            },
            true
          );
          console.log(user);
          //user.savedAttractions = user.savedAttractions.concat([Attraction.id])
          user.savedAttractions.push(
            realm.create(
              "Attraction",
              {
                id: Attraction.id,
                title: Attraction.title,
                city: Attraction.city,
                rate: Attraction.rate,
                description: Attraction.description,
                image: Attraction.image,
                cost: Attraction.cost,
                gettingThere: Attraction.gettingThere,
                gettingThereDuration: Attraction.gettingThereDuration,
                guideNecessity: Attraction.guideNecessity,
                nearRestaurants: Attraction.nearRestaurants,
                saved: Attraction.saved
              },
              true
            )
          );
          console.log(user);
        });

        // realm.write(() => {

        // })
        // realm.write(() => {
        //   let baraka = realm.create("User", {
        //     id: 8,
        //     username: "barakao",
        //     age: 25,
        //     gender: "male",
        //     savedAttractions: []
        //   }, true);
        //   baraka.savedAttractions.push(attraction)
        // });
        let SavedAttractions = realm.objects("User");
      }
    );
  }
  render() {
    return (
      <UserContext.Provider
        value={{
          user: this.state.user,
          saveUserAttraction: attraction => this.handleSaveAttraction(attraction)
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
