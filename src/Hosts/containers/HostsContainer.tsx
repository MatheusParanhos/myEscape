import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import hostsData from '../data/hostsData.json'
import Host from '../components/Host'

export default class HostsContainer extends Component {

  render() {
     // console.log({attractionsData})
      console.log(hostsData)
    return (
        <View style={{flex:1, width: '100%'}}>
      <FlatList 
      data={hostsData}
      style={{flex:1}}
      renderItem={(  {item}  ) => {
        return (
          <Host
            hostTitle={item.hostTitle}
            source={`${item.hostImage}`}
            onSavePress={() => console.log("salvou")}
            location={item.hostLocation}
            rate={item.hostRate}
          />
        )
      }}
      >
      </FlatList>
      </View>

    )
  }
}