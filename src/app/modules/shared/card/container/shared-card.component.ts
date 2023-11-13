import { Component, Input } from "@angular/core";
import { DetailComponent } from '../../../detail/container/detail.component';
import { Card } from "../interfaces/shared-card.interface";

@Component({
  selector: 'rm-card',
  templateUrl: 'shared-card.component.html',
  styleUrls: ['shared-card.component.scss']
})

export class SharedCardComponent {

  @Input() character!: Card;

  public detail !: DetailComponent

}


