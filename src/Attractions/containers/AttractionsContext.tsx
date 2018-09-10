import React from "react";
import initializeDatabase from '../functions/initDatabase'
import fs from "react-native-fs";
import Realm from "realm";
import { AttractionSchema } from "../data/AttractionsModel";

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
    this.state = {
      attractions:{},
      attraction: {}
    };
  }

  componentDidMount() {
    console.log('comp will mount')
    // Open Database
   let realm = new Realm({
    path: fs.MainBundlePath + '/attraction.realm',
    schema: [AttractionSchema.schema]
  });
    const attr = realm.objects(AttractionSchema.schema.name)
    // Read attraction from realm object
    const attractions = realm.objects("Attraction");
    // Console Attraction lenght and object
    this.setState({ attractions });
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
