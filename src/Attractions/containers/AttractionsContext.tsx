import React from "react";
import { AttractionSchema } from "../data/AttractionsModel";
import fs from "react-native-fs";
import Realm from "realm";

export const AttractionsContext = React.createContext({
  name: "Attraction",
  attractions: {},
  // setAttraction: attraction => {
  //   console.log(attraction);
  // },
  // clearContext: () => {}
});

const initialState = {
  attraction: {}
};

export default class AttractionProvider extends React.Component {
  persistContext: any;
  attraction: {};
  constructor() {
    super();
    //this.persistContext = new PersistContext("AttractionContext", initialState);
    this.state = {
      attractions:{},
      attraction: {}
    };
  }

  componentDidMount() {
    console.log('comp will mount')
    // Open Database with filesystem attached
    console.log(fs.MainBundlePath)
    let realm = new Realm({
      path: fs.MainBundlePath + '/attraction.realm',
      schema: [AttractionSchema.schema]
    });
    console.log(realm)
   // Write attractions
    // realm.write(() => {
    //   let attr = new AttractionSchema(
    //     11,
    //     "Cachoeira vrau",
    //     "Alto paraiso",
    //     5,
    //     "Foda!",
    //     "opa",
    //     50,
    //     "facin",
    //     30,
    //     1,
    //     "varios"
    //   );
    //   realm.create(AttractionSchema.schema.name, attr)
    // });
    const attr = realm.objects(AttractionSchema.schema.name)
    // Read attraction from realm object
    const attractions = realm.objects("Attraction");
    // Console Attraction lenght and object
    console.log(attr)
    console.log(attractions)
    console.log(attr.length)
    console.log(attractions.length);
    console.log(attractions[0]);
    this.setState({ attractions });
    console.log(this.state.attractions)
  }

  // componentDidUpdate() {
  //   this.persistContext.persistState({ ...this.state });
  // }

  handleAttractionChange(attraction) {
    console.log("attraction is:", attraction);
    // this.setState({ attraction });
  }

  clearContext() {
    this.setState(initialState);
  }
  // componentDidMount() {
    
  // }
  render() {
    const { children } = this.props;
    return (
      <AttractionsContext.Provider
        value={{
          attractions: this.state.attractions,
          //attraction: this.state.attraction,
          setAttraction: attraction => this.handleAttractionChange(attraction),
          // clearContext: () => this.clearContext()
        }}
      >
        {children}
      </AttractionsContext.Provider>
    );
  }
}
