import { CharacterGenderEnum } from "src/app/modules/home/enums/home-character-gender.enum";

export interface SharedCard {
    created?: Date;
    episode?: string[];
    gender: CharacterGenderEnum;
    image: string;
    location?: string;
    name: string;
    origin: string;
    species?: string;
    status?: string;
    type?: string;
    url?: string;
}