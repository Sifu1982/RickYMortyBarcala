import { Component, Input } from '@angular/core';
import { RmButton, ButtonSizeEnum, ButtonColorEnum } from '../../interfaces/rm-button.interface';

@Component({
  selector: 'rm-button',
  templateUrl: 'rm-button.component.html',
  styleUrls: ['rm-button.component.scss']
})

export class RmButtonComponent {

  @Input() rmButtonConfig!: RmButton;
  ButtonSizeEnum = ButtonSizeEnum;
  ButtonColorEnum = ButtonColorEnum;
}
