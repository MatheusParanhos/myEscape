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
  saveAttraction: attraction => {
    console.log(attraction)
  }
});
interface UserProviderInterface {
  user: any;
  value: any;
  state: any;
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
  handleSaveAttraction (attraction) {
    console.log("attraction is:", attraction)
    // Write user
   Realm.open({schema: [UserSchema.schema, AttractionSchema.schema]})
   .then(realm => {
    let baraka = realm.objects('User')
    console.log(baraka[0])
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
    let SavedAttractions = realm.objects('User');
    console.log(SavedAttractions[1])
    console.log({SavedAttractions})
    console.log(SavedAttractions[5])
    
   })
  }
  render() {
    return (
      <UserContext.Provider
        value={{
          user: this.state.user,
          saveAttraction: attraction => this.handleSaveAttraction(attraction)
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
