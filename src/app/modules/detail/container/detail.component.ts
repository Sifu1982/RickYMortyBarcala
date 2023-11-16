import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { DetailCharacter } from "../interfaces/detail-character.interface";
import { DetailService } from "../services/detail.service";
import { ButtonColorEnum, ButtonSizeEnum } from "../../shared/interfaces/rm-button.interface";

@Component({
  templateUrl: 'detail.component.html',
  styleUrls: ['detail.component.scss']
})

export class DetailComponent implements OnInit {

  public character!: DetailCharacter;
  public buttonSizeEnum = ButtonSizeEnum;
  public buttonColorEnum = ButtonColorEnum;

  constructor(
    private detailService: DetailService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getCharacterById(Number(id));
    }
  }

  public getCharacterById(id: number): void {
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

  goToHome(): void {
    this.router.navigate(['/home'])
  }
}
