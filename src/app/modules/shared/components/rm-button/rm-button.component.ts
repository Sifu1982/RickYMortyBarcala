import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonColorEnum, ButtonSizeEnum, RmButton } from '../../interfaces/rm-button.interface';

@Component({
  selector: 'rm-button',
  templateUrl: 'rm-button.component.html',
  styleUrls: ['rm-button.component.scss']
})

export class RmButtonComponent {

  @Input() disabled: boolean = false;
  @Input() rmButtonConfig!: RmButton;
  @Output() rmButtonClick: EventEmitter<void> = new EventEmitter<void>();

  ButtonSizeEnum = ButtonSizeEnum;
  ButtonColorEnum = ButtonColorEnum;

  onclick(): void {
    this.rmButtonClick.emit();
  }

  rmButtonConfigOptions() {
    let size: string;
    let color: string;

    switch (this.rmButtonConfig.size) {
      case ButtonSizeEnum.SMALL:
        size = 'rm-button__small';
        break;
      case ButtonSizeEnum.MEDIUM:
        size = 'rm-button__medium';
        break;
      case ButtonSizeEnum.BIG:
        size = 'rm-button__big';
        break;
      default:
        size = '';
    }

    switch (this.rmButtonConfig.color) {
      case ButtonColorEnum.SUCCESS:
        color = 'rm-button__success';
        break;
      case ButtonColorEnum.ERROR:
        color = 'rm-button__error';
        break;
      case ButtonColorEnum.INFO:
        color = 'rm-button__info';
        break;
      case ButtonColorEnum.WARNING:
        color = 'rm-button__warning';
        break;
      case ButtonColorEnum.DEFAULT:
        color = 'rm-button__default';
        break;
      default:
        color = '';
    }

    return {
      [size]: true,
      [color]: true,
    };
  }
}

