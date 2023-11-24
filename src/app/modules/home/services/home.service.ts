import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { development } from 'src/app/environments/environment.development';
import { Character, CharacterResponse } from '../interfaces/character-response.interface';
import { HomeCharacter } from '../interfaces/home-character.interface';


@Injectable()
export class HomeService {

  constructor(private http: HttpClient) { }

  private baseUrl = `${development.apiUrl}`;

  getAllCharacters(): Observable<HomeCharacter[]> {
    const url = `${this.baseUrl}/character`;
    return this.http.get<CharacterResponse>(url).pipe(
      map<CharacterResponse, HomeCharacter[]>((characterResponse: CharacterResponse) =>
        characterResponse.results.map((character: Character) =>
        ({
          gender: character.gender,
          id: character.id,
          image: character.image,
          name: character.name,
          origin: character.origin.name,
        }))
      )
    );
  }

  getCharacterByGender(gender: string): Observable<HomeCharacter[]> {
    const url = `${this.baseUrl}/character/?gender=${gender}`;
    return this.http.get<CharacterResponse>(url).pipe(
      map<CharacterResponse, HomeCharacter[]>((characterResponse: CharacterResponse) =>
        characterResponse.results.map((character: Character) =>
        ({
          gender: character.gender,
          id: character.id,
          image: character.image,
          name: character.name,
          origin: character.origin.name,
        }))
      )
    );
  }
}
