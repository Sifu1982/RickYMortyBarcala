import { CharacterGenderEnum } from "../enums/home-character-gender.enum";

export interface HomeCharacter {
  gender: CharacterGenderEnum;
  image: string;
  name: string;
  origin: string;
}
