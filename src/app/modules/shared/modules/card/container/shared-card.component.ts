import { Component, Input } from "@angular/core";
import { SharedCard } from "../interfaces/shared-card.interface";

@Component({
  selector: 'app-shared-card',
  templateUrl: 'shared-card.component.html',
  styleUrls: ['shared-card.component.scss']
})

export class SharedCardComponent {

  @Input() sharedCharacter!: SharedCard;

}
