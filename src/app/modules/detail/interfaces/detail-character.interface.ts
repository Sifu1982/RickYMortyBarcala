import { CharacterGenderEnum } from "../../home/enums/home-character-gender.enum";

export interface DetailCharacter {
    created:  string;
    episode:  string[];
    gender:   CharacterGenderEnum;
    image:    string;
    location: string;
    name:     string;
    origin:   string;
    species:  string;
    status:   string;
    type:     string;
    url:      string;
  }