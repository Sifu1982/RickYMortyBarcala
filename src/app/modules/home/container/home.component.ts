import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeCharacter } from '../interfaces/home-character.interface';
import { HomeService } from '../services/home.service';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']

})
export class HomeComponent implements OnInit {

  //TODO:AlvaroBM1 crear variable publica para control de error
  public characters: HomeCharacter[] = [];
  public isDetailPage = false;

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

  onGenderChange(gender: string): void {
    if (gender === 'All') {
      this.getAllCharacters();
    } else {
      this.charactersService
        .getCharacterByGender(gender)
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
  }
}
