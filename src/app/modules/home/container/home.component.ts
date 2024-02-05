import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RmForm } from '../../shared/interfaces/rm-form.interface';
import { RmPageInfo } from '../../shared/interfaces/rm-page-info.interface';
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

  form: RmForm = {
    gender: CharacterGenderEnum.ALL,
    name: '',
    page: 0
  }

  pageInfo: RmPageInfo = {
    characterCount: 0,
    counter: 1,
    disableNextButton: false,
    disablePrevButton: true,
    pages: 0
  };

  constructor(private charactersService: HomeService, private router: Router) { }

  ngOnInit(): void {
    this.loadLocalStorage()
    this.pageInfo.counter = this.form.page;
    this.onFormChange(this.form);
    this.paginationInfo();
    console.log('init',localStorage, this.pageInfo.counter);

  }

  navigateToDetail(id: number): void {
    this.router.navigate(['/detail', id]);
  }

  onFormChange(form: RmForm): void {
    this.characterNotFound = false;
    this.form.gender = form.gender;
    this.form.name = form.name;
    localStorage.setItem('form', JSON.stringify(this.form))
    console.log('formchange',localStorage, this.pageInfo.counter);

    if (this.form.page !== undefined) {
    this.charactersService
      .getCharacterForm(this.form.gender, this.form.name, this.form.page)
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
    if (page === 'next') {
      this.pageInfo.counter++;
    } else if (page === 'prev' && this.pageInfo.counter > 1) {
      this.pageInfo.counter--;
    }

    this.form.page = this.pageInfo.counter;
    localStorage.setItem('form', JSON.stringify(this.form))
    console.log(localStorage, this.pageInfo.counter);

    this.charactersService
      .getCharactersByPage(this.form.gender, this.form.name, this.form.page)
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
    this.form.gender = CharacterGenderEnum.ALL;
    this.form.name = '';
    this.form.page = 1;
    this.pageInfo.counter = 1;
    console.log('reset',localStorage, this.pageInfo.counter);


  }

  private paginationInfo() {
    this.charactersService.paginationInfo.subscribe(({ characterCount, pages, resetCounter, previousPage }) => {
      this.pageInfo.characterCount = characterCount;
      this.pageInfo.pages = pages;
      if (resetCounter) this.pageInfo.counter = resetCounter;
      this.pageInfo.disablePrevButton = (previousPage ?? 0) <= 1;
      this.pageInfo.disableNextButton = this.pageInfo.counter === this.pageInfo.pages;
    });
  }

  characterTrackByID(index: number, character: HomeCharacter): number {
    return character.id;
  }

  loadLocalStorage(): void {
    const storedForm = localStorage.getItem('form');
    if (storedForm !== null) {
      this.form = JSON.parse(storedForm);
    }
  }
}
