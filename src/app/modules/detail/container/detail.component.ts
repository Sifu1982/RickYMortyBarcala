import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ButtonColorEnum, ButtonSizeEnum, RmButton } from "../../shared/interfaces/rm-button.interface";
import { DetailCharacter } from "../interfaces/detail-character.interface";
import { DetailService } from "../services/detail.service";

@Component({
  templateUrl: 'detail.component.html',
  styleUrls: ['detail.component.scss']
})

export class DetailComponent implements OnInit {

  public buttonConfig: RmButton = {
    text: 'Go Home',
    size: ButtonSizeEnum.MEDIUM,
    color: ButtonColorEnum.INFO
  };
  public character!: DetailCharacter;

  constructor(
    private detailService: DetailService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getIdFromRoute();
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

  public goToHome(): void {
    this.router.navigate(['/home'])
  }

  private getIdFromRoute(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getCharacterById(Number(id));
    }
  }
}
