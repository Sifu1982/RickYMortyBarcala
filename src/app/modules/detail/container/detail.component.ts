import { Component, OnInit } from "@angular/core";
import { DetailCharacter } from '../interfaces/detail-character.interface';

@Component({
    templateUrl: 'detail.component.html'
})

export class DetailComponent implements OnInit {

    public detailCharacter: DetailCharacter[] = [];

    constructor() { }

    ngOnInit(): void {
    }
}