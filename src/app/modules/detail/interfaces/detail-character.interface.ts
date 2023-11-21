import { CharacterGenderEnum } from "../../home/enums/home-character-gender.enum";

export interface DetailCharacter {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: CharacterGenderEnum;
    origin: string;
    location: string;
    image: string;
    episode: string[];
    url: string;
    created: Date;
}