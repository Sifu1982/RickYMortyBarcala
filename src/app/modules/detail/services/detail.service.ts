import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { development } from "src/app/environments/environment.development";
import { DetailCharacterResponse } from "../interfaces/detail-character-response.interface";
import { DetailCharacter } from "../interfaces/detail-character.interface";


@Injectable()
export class DetailService {

  constructor(private http: HttpClient) { }

  private baseUrl = `${development.apiUrl}/character/`;

  getCharacterById(id: number): Observable<DetailCharacter> {
    const url = `${this.baseUrl}${id}`;
    return this.http.get<DetailCharacterResponse>(url).pipe(
      map<DetailCharacterResponse, DetailCharacter>((character: DetailCharacterResponse) =>
      ({
        created: character.created,
        episode: character.episode,
        gender: character.gender,
        id: character.id,
        image: character.image,
        location: character.location.name,
        name: character.name,
        origin: character.origin.name,
        species: character.species,
        status: character.status,
        type: character.type,
        url: character.url
      })
      )
    );
  }
}