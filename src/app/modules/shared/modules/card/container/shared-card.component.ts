import { Component, Input, OnInit } from "@angular/core";
import { HomeCharacter } from "src/app/modules/home/interfaces/home-character.interface";
import { DetailCharacter } from "../../../../detail/interfaces/detail-character.interface";

@Component({
  selector: 'app-shared-card',
  templateUrl: 'shared-card.component.html',
  styleUrls: ['shared-card.component.scss']
})

export class SharedCardComponent implements OnInit {

  @Input() detailCharacter!: DetailCharacter;
  @Input() homeCharacter!: HomeCharacter;
  @Input() isDetailPage: boolean = false;

  public character!: DetailCharacter | HomeCharacter;

  ngOnInit() {
    if (this.isDetailPage) {
      this.character = this.detailCharacter;
    } else {
      this.character = this.homeCharacter;
    }
  }

  get detailCharacterType(): DetailCharacter {
    return this.character as DetailCharacter;
  }
}
