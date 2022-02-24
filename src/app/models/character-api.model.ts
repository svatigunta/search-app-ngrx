
export interface Character {
  name: string;
  alternate_names: string[];
  species: string;
  gender: Gender;
  house: House;
  dateOfBirth: string;
  yearOfBirth: number | string;
  wizard: boolean;
  ancestry: Ancestry;
  eyeColour: EyeColour;
  hairColour: HairColour;
  wand: Wand;
  patronus: string;
  hogwartsStudent: boolean;
  hogwartsStaff: boolean;
  actor: string;
  alternate_actors: string[];
  alive: boolean;
  image: string;
}

export enum Ancestry {
  HalfBlood = "half-blood",
  HalfVeela = "half-veela",
  Muggle = "muggle",
  Muggleborn = "muggleborn",
  PureBlood = "pure-blood",
  QuarterVeela = "quarter-veela",
  Squib = "squib",
}


export enum EyeColour {
  Amber = "amber",
  Black = "black",
  Blue = "blue",
  Brown = "brown",
  Dark = "dark",
  Empty = "",
  Green = "green",
  Grey = "grey",
  Hazel = "hazel",
  Orange = "orange",
  PaleSilvery = "pale, silvery",
  Red = "red",
  White = "white",
  Yellow = "yellow",
  Yellowish = "yellowish",
}

export enum Gender {
  Female = "female",
  Male = "male",
}

export enum HairColour {
  Bald = "bald",
  Black = "black",
  Blond = "blond",
  Blonde = "blonde",
  Brown = "brown",
  Dark = "dark",
  Dull = "dull",
  Empty = "",
  Ginger = "ginger",
  Grey = "grey",
  Red = "red",
  Sandy = "sandy",
  Silver = "silver",
  Tawny = "tawny",
  White = "white",
}

export enum House {
  Gryffindor = "Gryffindor",
  Hufflepuff = "Hufflepuff",
  Ravenclaw = "Ravenclaw",
  Slytherin = "Slytherin",
}

export interface Wand {
  wood: Wood;
  core: Core;
  length: number | string;
}

export enum Core {
  DragonHeartstring = "dragon heartstring",
  PhoenixFeather = "phoenix feather",
  UnicornHair = "unicorn hair",
  UnicornTailHair = "unicorn tail-hair",
}

export enum Wood {
  Ash = "ash",
  Birch = "birch",
  Cedar = "cedar",
  Cherry = "cherry",
  Chestnut = "chestnut",
  Cypress = "cypress",
  Elm = "elm",
  Empty = "",
  Hawthorn = "hawthorn",
  Holly = "holly",
  Hornbeam = "hornbeam",
  Larch = "larch",
  Mahogany = "mahogany",
  Oak = "oak",
  Vine = "vine",
  Walnut = "walnut",
  Willow = "willow",
  Yew = "yew",
}
