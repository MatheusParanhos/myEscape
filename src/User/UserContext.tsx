import React, { Component } from "react";
import { AsyncStorage } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Proptypes from "prop-types";

export const UserContext = React.createContext({
  user: "",
  setUser: () => {}
});
interface UserProviderInterface {
  user: any
  setUser: (user) => void
  value: any
  state: any
}
export default class UserProvider extends Component <UserProviderInterface>{
  constructor() {
    super();
    this.state = {
      user: "",
      userFirstTime: false,
    };
  }
  // Initialize user state
  componentWillMount() {
    this.getState();
  }
  
  componentDidUpdate() {
    this.persistState({ ...this.state });
  }
  getState = () => {
    // AsyncStorage.clear()
    AsyncStorage.getItem("UserContext").then(response => {
      console.log(response)
      const parsedResult = JSON.parse(response);
      this.setState({ user: parsedResult.user });
    });
  };
  persistState = state => {
    const stateJson = JSON.stringify(state);
    console.log(stateJson)
    AsyncStorage.setItem("UserContext", stateJson);
  };
  handleUserChange(user) {
    console.log('changing user..')
    this.setState({ user });
  }
  render() {
    return (
      <UserContext.Provider
        value={{
          user: this.state.user,
          setUser: (user) => {
            this.handleUserChange(user);
          }
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
