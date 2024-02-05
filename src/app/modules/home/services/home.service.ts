
import { HttpClient, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { development } from 'src/app/environments/environment.development';
import { Character, CharacterResponse } from '../interfaces/character-response.interface';
import { HomeCharacter } from '../interfaces/home-character.interface';

@Injectable()
export class HomeService {

  constructor(private http: HttpClient) { }

  private baseUrl = `${development.apiUrl}/character`;
  private nextPage = '';
  public prevPage = 0;
  public paginationInfo: EventEmitter<{
    characterCount: number,
    pages: number,
    resetCounter?: number,
    previousPage?: number
  }> = new EventEmitter<{ characterCount: number, pages: number, resetCounter?: number, previousPage?: number }>();

  getCharactersByPage(gender: string, name: string, page: number): Observable<HomeCharacter[]> {

    if (gender === 'All') gender = '';
    let params = new HttpParams();
    params = params.set('gender', gender);
    params = params.set('name', name);
    params = params.set('page', page);
    const url = `${this.baseUrl}?${params.toString()}`;
    console.log('servicio url:', url);

    return this.http.get<CharacterResponse>(url).pipe(
      map<CharacterResponse, HomeCharacter[]>((characterResponse: CharacterResponse) => {
        this.nextPage = characterResponse.info.next;
        this.prevPage = page;
        const charactersNumbersInfo = {
          characterCount: characterResponse.info.count,
          pages: characterResponse.info.pages,
          previousPage: page,
          nextPag: this.nextPage
        };
        this.paginationInfo.emit(charactersNumbersInfo);
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

  getCharacterForm(gender: string, name: string, page: number): Observable<HomeCharacter[]> {
    if (gender === 'All') gender = '';
    let params = new HttpParams();
    params = params.set('gender', gender);
    params = params.set('name', name);
    params = params.set('page', page);

    const url = `${this.baseUrl}?${params.toString()}`;
    return this.http.get<CharacterResponse>(url).pipe(
      map<CharacterResponse, HomeCharacter[]>((characterResponse: CharacterResponse) => {
        this.nextPage = characterResponse.info.next;
        this.prevPage = page;
        const charactersNumbersInfo = {
          characterCount: characterResponse.info.count,
          pages: characterResponse.info.pages,
          // resetCounter: 1
        };
        this.paginationInfo.emit(charactersNumbersInfo);
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
    return this.prevPage === null;
  }
}
