import React from "react";
import initializeDatabase from '../functions/initDatabase'
import fs from "react-native-fs";
import Realm from "realm";
import { AttractionSchema } from "../data/AttractionsModel";

export const AttractionsContext = React.createContext({
  name: "Attraction",
  attractions: {},
  savedAttractions:{},
  saveAttraction: (attraction) => {console.log(attraction)},
  // clearContext: () => {}
});

const initialState = {
  attraction: {}
};

export default class AttractionProvider extends React.Component {
  persistContext: any;
  attraction: {};
  attractions: any;
  constructor() {
    super();
    this.state = {
      attractions:{},
      savedAttractions:{},
      attraction: {
        isSaved: false
      },
    };
  }

  componentDidMount() {
    console.log('comp will mount')
    initializeDatabase()
    // Open Database
   let realm = new Realm({
    path: fs.MainBundlePath + '/attraction.realm',
    schema: [AttractionSchema.schema],
    
  });
    const attr = realm.objects(AttractionSchema.schema.name)
    // Read attraction from realm object
    const attractions = realm.objects("Attraction");
    // Console Attraction lenght and object
    console.log(attractions)
    this.setState({ attractions });
    this.setState({savedAttractions:''})
   
  }

  handleSaveAttraction(attraction) {
    console.log("attraction:", attraction);
    console.log('updating..')
    let realm = new Realm({
      path: fs.MainBundlePath + '/attraction.realm',
      schema: [AttractionSchema.schema],
    });

    console.log('updating..')
    realm.write(() => {
      realm.create('Attraction', {id:attraction.id, saved:!attraction.saved}, true)
    })
    let sortAttractions = realm.objects(AttractionSchema.schema.name).filtered('saved == true')
    console.log("saved are:", sortAttractions)
     this.setState({ savedAttractions: sortAttractions });
  }

  clearContext() {
    this.setState(initialState);
  }
  render() {
    const { children } = this.props;
    return (
      <AttractionsContext.Provider
        value={{
          attractions: this.state.attractions,
          savedAttractions: this.state.savedAttractions,  
          //attraction: this.state.attraction,
          saveAttraction: attraction => this.handleSaveAttraction(attraction),
          // clearContext: () => this.clearContext()
        }}
      >
        {children}
      </AttractionsContext.Provider>
    );
  }
}
