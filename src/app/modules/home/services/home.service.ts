import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Character, CharacterResponse } from '../interfaces/character-response.interface';
import { HomeCharacter } from '../interfaces/home-character.interface';


@Injectable()
export class HomeService {

  constructor(private http: HttpClient) {}

  private baseUrl = 'https://rickandmortyapi.com/api/';

  getAllCharacters(): Observable<HomeCharacter[]> {
    const url = `${this.baseUrl}character`;
    return this.http.get<CharacterResponse>(url).pipe(
      map<CharacterResponse, HomeCharacter[]>((characterResponse: CharacterResponse) =>
        characterResponse.results.map((character: Character) =>
        ({
          image: character.image,
          name: character.name,
          gender: character.gender,
          origin: character.origin.name,
        }))
      )
    );
  }
}
