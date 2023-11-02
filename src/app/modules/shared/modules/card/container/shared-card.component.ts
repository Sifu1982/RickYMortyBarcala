import { Component, Input, OnInit } from "@angular/core";
import { DetailCharacter } from "../../../../detail/interfaces/detail-character.interface";

@Component({
  selector: 'app-shared-card',
  templateUrl: 'shared-card.component.html',
  styleUrls: ['shared-card.component.scss']
})

export class SharedCardComponent implements OnInit {

  @Input() character!: DetailCharacter;
  public isDetailPage: boolean = false;

  ngOnInit(): void {
    this.isDetailPage = true;
  }


}
