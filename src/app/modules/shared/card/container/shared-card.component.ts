import { Component, Input } from "@angular/core";
import { SharedCard } from "../interfaces/shared-card.interface";
import { DetailComponent } from '../../../detail/container/detail.component';
import { Router } from "@angular/router";

@Component({
  selector: 'app-shared-card',
  templateUrl: 'shared-card.component.html',
  styleUrls: ['shared-card.component.scss']
})

export class SharedCardComponent {

  @Input() sharedCharacter!: SharedCard;
  
  public detail !: DetailComponent

  constructor(private router: Router) { }

  onclick(): void{
    this.router.navigate(['/detail', this.sharedCharacter.id]);
  }

}


