import React from "react";
import { PersistContext } from "./PersistContext";
// import { PersistContext } from './PersistContext';

export const AttractionContext = React.createContext({
  __typename: "Attraction",
  attraction: {
    title: null,
    rate: null,
    location: null,
    image: null,
    id: null
  },
  setAttraction: (attraction) => {
      console.log(attraction)
      
    },
  clearContext: () => {}
});

const initialState = {
  attraction: {},
};

export class AttractionProvider extends React.Component {
    persistContext: any;
    attraction: {};
  constructor() {
    super();
    //this.persistContext = new PersistContext("AttractionContext", initialState);
    this.state = {
        attraction:{
            id:'1',
            title:'dummy',
            rate:'4',
            location:'brasil'
        }
    }
    //this.persistContext.getState();
  }

  componentDidUpdate() {
    this.persistContext.persistState({ ...this.state });
  }

  handleAttractionChange(attraction) {
      console.log('attraction is:', attraction)
   // this.setState({ attraction });
  }


  clearContext() {
    this.setState(initialState);
  }

  render() {
    const { children } = this.props;
    return (
      <AttractionContext.Provider
        value={{
          attraction: this.state.attraction,
          setAttraction: (attraction) => this.handleAttractionChange(attraction),
          clearContext: () => this.clearContext()
        }}
      >
        {children}
      </AttractionContext.Provider>
    );
  }
}
