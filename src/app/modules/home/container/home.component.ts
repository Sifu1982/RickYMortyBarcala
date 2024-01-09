import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RmForm } from '../../shared/interfaces/rm-form.interface';
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
  public gender = '';
  public name = '';
  public disablePrevButton: boolean = true;
  public disableNextButton: boolean = false;
  public characterCount: number = 0;
  public pages: number = 0;
  public counter: number = 1;

  constructor(private charactersService: HomeService, private router: Router) { }

  ngOnInit(): void {
    this.getAllCharacters();
    this.paginationInfo();
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

  public getPageCharacters(page: string): void {
    if (page === 'next') {
      this.counter++;
    } else if (page === 'prev' && this.counter > 1) {
      this.counter--;
    }
    this.charactersService
      .getCharactersByPage(this.gender, this.name, page)
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

  public onResetPressed() {
    this.gender = ''
    this.name = ''
  }

  private paginationInfo() {
    this.charactersService.paginationInfo.subscribe(({ characterCount, pages, resetCounter, previousPage }) => {
      this.characterCount = characterCount;
      this.pages = pages;
      if (resetCounter) this.counter = resetCounter;
      this.disablePrevButton = !!previousPage ? false : true;
      this.disableNextButton = this.counter === this.pages;
    });
  }
}
