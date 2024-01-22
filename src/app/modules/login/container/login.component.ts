import { Component, ViewEncapsulation } from "@angular/core";
import { RmButton, ButtonSizeEnum, ButtonColorEnum } from "../../shared/interfaces/rm-button.interface";


@Component({
  templateUrl: 'login.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['login.component.scss']
})

export class LoginComponent {

  public submitButtonConfig: RmButton = {
    text: 'SIGN IN',
    size: ButtonSizeEnum.MEDIUM,
    color: ButtonColorEnum.INFO
  };
}

