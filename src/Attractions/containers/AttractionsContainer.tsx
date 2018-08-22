import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import attractionsData from '../data/attractions.json'
import Attraction from '../components/Attraction'

export default class AttractionsContainer extends Component {

  render() {
     // console.log({attractionsData})
     // console.log(attractionsData)
    return (
      <FlatList 
      data={attractionsData}
      style={{flex:1}}
      renderItem={(  {item}  ) => {
        return (
          <Attraction
            attractionTitle={item.attractionTitle}
            source={`${item.attractionImage}`}
            onSavePress={() => console.log("salvou")}
            location={item.attractionLocation}
            rate={item.attractionRate}
          />
        )
      }}
      >
      </FlatList>

    )
  }
}