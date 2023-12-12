import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RmForm } from '../../shared/interfaces/rm-form.interface';
import { CharacterGenderEnum } from '../enums/home-character-gender.enum';
import { HomeCharacter } from '../interfaces/home-character.interface';
import { HomeService } from '../services/home.service';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})

export class HomeComponent implements OnInit {
  //TODO:AlvaroBM1 crear variable publica para control de error
  public characters: HomeCharacter[] = [];
  public characterNotFound = false;
  public disabledButton = true;
  public gender = '';
  public name = '';

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
    this.characterNotFound = false;
    if (form.gender === CharacterGenderEnum.ALL && !form.name) {
      this.getAllCharacters();
    } else {
      this.gender = form.gender;
      this.name = form.name;
      this.charactersService
        .getCharacterForm(form.gender, form.name)
        .subscribe({
          next: (homeCharacters: HomeCharacter[]) => {
            this.characters = homeCharacters
          }
          ,
          error: (error: any) => {
            console.log('Error solicitud Http', error);
            this.characterNotFound = true;
            this.characters = [];
          }
        })
    }
  }

  public getPageCharacters(page: string): void {
    this.charactersService
      .getCharactersByPage(this.gender, this.name, page)
      .subscribe({
        next: (homeCharacters: HomeCharacter[]) => {
          this.characters = homeCharacters
          this.updateDisabledButton();
        }
        ,
        error: (error: any) => {
          console.log('Error solicitud Http', error);
          this.characterNotFound = true;
          this.characters = [];
          this.updateDisabledButton();
        }
      })
  }

  public onResetPressed() {
    this.gender = ''
    this.name = ''
  }

  private updateDisabledButton(): void {
    this.disabledButton = this.charactersService.isPrevPageNull();
  }
}
