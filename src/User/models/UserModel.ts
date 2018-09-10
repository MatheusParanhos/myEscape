import * as Realm from "realm";

export class UserSchema {
  public static schema: Realm.ObjectSchema = {
    name: "User",
    primaryKey: "id",
    properties: {
      id: "int",
      username: "string",
      age: "int?",
      gender: "string?",
      savedAttractions: {
          type:'list',
          objectType:'Attraction'
      }
    }
  };
  public id: number;
  public username: string;
  public age: number;
  public gender: string;

  constructor(id: number, username: string, age: number, gender: string) {
    (this.id = id), (this.username = username);
    this.age = age;
    this.gender = gender;
  }
}
