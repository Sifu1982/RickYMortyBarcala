import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonColorEnum, ButtonSizeEnum, RmButton } from '../../interfaces/rm-button.interface';

@Component({
  selector: 'rm-button',
  templateUrl: 'rm-button.component.html',
  styleUrls: ['rm-button.component.scss']
})

export class RmButtonComponent {

  @Input() rmButtonConfig!: RmButton;
  @Output() rmButtonClick: EventEmitter<void> = new EventEmitter<void>();

  ButtonSizeEnum = ButtonSizeEnum;
  ButtonColorEnum = ButtonColorEnum;

  onclick(): void {
    this.rmButtonClick.emit();
  }
}

