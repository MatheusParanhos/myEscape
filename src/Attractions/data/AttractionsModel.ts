import * as Realm from "realm";

export class AttractionSchema {
  public static schema: Realm.ObjectSchema = {
    name: "Attraction",
    primaryKey: "id",
    properties: {
      id: "int",
      title: "string",
      city: "string",
      rate: "int",
      description: "string",
      image:"string",
      cost: "int",
      gettingThere: "string",
      gettingThereDuration: "int",
      guideNecessity: "int",
      nearRestaurants: "string"
    }
  };
  public id: number;
  public title: string;
  public city: string;
  public rate: number;
  public description: string;
  public image: any;
  public cost: number;
  public gettingThere: string;
  public gettingThereDuration: number;
  public guideNecessity: number;
  public nearRestaurants: any;

  constructor(
    id: number,
    title: string,
    city: string,
    rate: number,
    description: string,
    image: any,
    cost: number,
    gettingThere: string,
    gettingThereDuration: number,
    guideNecessity: number,
    nearRestaurants: any
  ) {
    this.id = id;
    this.title = title;
    this.city = city;
    this.rate = rate;
    this.description = description;
    this.image = image;
    this.cost = cost;
    this.gettingThere = gettingThere;
    this.gettingThereDuration = gettingThereDuration;
    this.guideNecessity = guideNecessity;
    this.nearRestaurants = nearRestaurants;
  }
}
