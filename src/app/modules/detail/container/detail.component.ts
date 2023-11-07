import { Component, OnInit } from "@angular/core";
import { DetailCharacter } from "../interfaces/detail-character.interface";
import { DetailService } from "../services/detail.service";

@Component({
    templateUrl: 'detail.component.html'
})

export class DetailComponent implements OnInit {

    public character!: DetailCharacter;
    public isDetailPage = true;

    constructor(private detailService: DetailService) { }

    ngOnInit(): void {
        this.getCharacterById('1');
    }

    private getCharacterById(id: string): void {
        this.detailService
            .getCharacterById(id)
            .subscribe({
                next: (detailCharacter: DetailCharacter) => {
                    this.character = detailCharacter
                },
                error: (error: any) => {
                    console.log('Error solicitud Http', error);
                }
            })
    }
}
