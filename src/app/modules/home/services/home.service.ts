
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { development } from 'src/app/environments/environment.development';
import { Character, CharacterResponse } from '../interfaces/character-response.interface';
import { HomeCharacter } from '../interfaces/home-character.interface';

@Injectable()
export class HomeService {

  constructor(private http: HttpClient) { }

  private baseUrl = `${development.apiUrl}/character`;
  private nextPage ='';
  public prevPage ='' || null;

  getAllCharacters(): Observable<HomeCharacter[]> {
    const url = this.baseUrl;
    return this.http.get<CharacterResponse>(url).pipe(
      map<CharacterResponse, HomeCharacter[]>((characterResponse: CharacterResponse) => {
        this.nextPage = characterResponse.info.next;
        this.prevPage = characterResponse.info.prev;
        return characterResponse.results.map((character: Character) => ({
          gender: character.gender,
          id: character.id,
          image: character.image,
          name: character.name,
          origin: character.origin.name,
        }));
      })
    );
  }

  getCharactersByPage(gender: string, name: string, pagination: string): Observable<HomeCharacter[]> {
    let url: string;
    if(pagination === 'next'){
      url = `${this.nextPage}&gender=${gender}&name=${name}`
    } else {
      if(pagination === 'prev'){
        url = `${this.prevPage}&gender=${gender}&name=${name}`
      }
      else{
        url = this.baseUrl
      }
    }
    return this.http.get<CharacterResponse>(url).pipe(
      map<CharacterResponse, HomeCharacter[]>((characterResponse: CharacterResponse) => {
        this.nextPage = characterResponse.info.next;
        this.prevPage = characterResponse.info.prev;
        return characterResponse.results.map((character: Character) => ({
          gender: character.gender,
          id: character.id,
          image: character.image,
          name: character.name,
          origin: character.origin.name,
        }));
      })
    );
  }

  getCharacterForm(gender: string, name: string): Observable<HomeCharacter[]> {
    let url: string;
    if (gender === 'All') {
      url = `${this.baseUrl}/?name=${name}`;
    } else {
      url = `${this.baseUrl}/?gender=${gender}&name=${name}`;
    }
    return this.http.get<CharacterResponse>(url).pipe(
      map<CharacterResponse, HomeCharacter[]>((characterResponse: CharacterResponse) =>  {
        this.nextPage = characterResponse.info.next;
        this.prevPage = characterResponse.info.prev;
        return characterResponse.results.map((character: Character) => ({
          gender: character.gender,
          id: character.id,
          image: character.image,
          name: character.name,
          origin: character.origin.name,
        }));
      })
    );
  }

  isPrevPageNull(): boolean {
    return this.prevPage=== null;
  }
}
