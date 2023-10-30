import { CharacterGenderEnum } from "../../home/enums/home-character-gender.enum";

export interface DetailCharacterResponse {
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
  created:  Date;
}

export interface Location {
  name: string;
  url:  string;
}