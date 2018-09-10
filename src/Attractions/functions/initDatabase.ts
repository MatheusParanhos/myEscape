import Realm from "realm";
import { AttractionSchema } from "../data/AttractionsModel";
import fs from "react-native-fs";
import attractionsData from '../data/attractions.json'

export default function initializeDatabase (){
    let realm = new Realm({
        path: fs.MainBundlePath + '/attraction.realm',
        schema: [AttractionSchema.schema]
      });
    realm.write(() => {
        attractionsData.forEach(obj => {
            realm.create(AttractionSchema.schema.name, obj, true)
        })
        
      });
      return true
}
