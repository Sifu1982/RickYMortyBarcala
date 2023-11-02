import { Component, Input } from "@angular/core";
import { DetailCharacter } from "../../../../detail/interfaces/detail-character.interface";


@Component({
    selector: 'app-shared-card',
    templateUrl: 'shared-card.component.html',
    styleUrls: ['shared-card.component.scss']
})

export class SharedCardComponent {
    @Input() character!: DetailCharacter;
}