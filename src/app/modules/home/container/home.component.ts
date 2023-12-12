import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RmForm } from '../../shared/interfaces/rm-form.interface';
import { CharacterGenderEnum } from '../enums/home-character-gender.enum';
import { HomeCharacter } from '../interfaces/home-character.interface';
import { HomeService } from '../services/home.service';
import { debounceTime } from 'rxjs';
@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit {
  //TODO:AlvaroBM1 crear variable publica para control de error
  public characters: HomeCharacter[] = [];

  constructor(private charactersService: HomeService, private router: Router) { }

  ngOnInit(): void {
    this.getAllCharacters();
  }

  private getAllCharacters(): void {
    this.charactersService
      .getAllCharacters()
      .subscribe({
        next: (homeCharacters: HomeCharacter[]) => {
          this.characters = homeCharacters
        }
        ,
        error: (error: any) => {
          console.log('Error solicitud Http', error);
        }
      })
  }

  navigateToDetail(id: number): void {
    this.router.navigate(['/detail', id]);
  }

  onFormChange(form: RmForm): void {
    if (form.gender === CharacterGenderEnum.ALL && !form.name) {
      this.getAllCharacters();
    } else {
      this.charactersService
        .getCharacterForm(form.gender, form.name)
        .pipe(debounceTime(500))
        .subscribe({
          next: (homeCharacters: HomeCharacter[]) => {
            this.characters = homeCharacters
          }
          ,
          error: (error: any) => {
            console.log('Error solicitud Http', error);
            this.characters = [];
          }
        })
    }
  }
}
