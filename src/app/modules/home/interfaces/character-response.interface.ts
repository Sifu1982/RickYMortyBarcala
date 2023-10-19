
import { CharacterGenderEnum } from "../enums/home-character-gender.enum"

export interface CharacterResponse {
  info:    Info;
  results: Character[];
}

export interface Info {
  count: number;
  pages: number;
  next:  string;
  prev:  null;
}

export interface Character {
  id:       number;
  name:     string;
  status:   string;
  species:  string;
  type:     string;
  gender:   CharacterGenderEnum;
  origin:   Location;
  location: Location;
  image:    string;
  episode:  string[];
  url:      string;
  created:  string;
}

export interface Location {
  name: string;
  url:  string;
}

