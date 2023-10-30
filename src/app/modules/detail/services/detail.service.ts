import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { development } from "src/app/environments/environment.development";
import { Character, CharacterResponse } from "../../home/interfaces/character-response.interface";
import { DetailCharacter } from "../interfaces/detail-character.interface";


@Injectable()
export class DetailService {

  constructor(private http: HttpClient) { }
  
  private baseUrl = `${development.apiUrl}/character/`;

  getCharacterById(id: string): Observable<DetailCharacter[]> {
    const url = `${this.baseUrl}${id}`;
    return this.http.get<CharacterResponse>(url).pipe(
      map<CharacterResponse, DetailCharacter[]>((characterResponse: CharacterResponse) =>
        characterResponse.results.map((character: Character) =>
        ({
          created: character.created,
          episode: character.episode,
          gender: character.gender,
          image: character.image,
          location: character.location.name,
          name: character.name,
          origin: character.origin.name,
          species: character.species,
          status: character.status,
          type: character.type,
          url: character.url
        }))
      )
    );
  }
}