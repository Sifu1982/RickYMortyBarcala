import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonColorEnum, ButtonSizeEnum, RmButton } from '../../interfaces/rm-button.interface';

@Component({
  selector: 'rm-button',
  templateUrl: 'rm-button.component.html',
  styleUrls: ['rm-button.component.scss']
})

export class RmButtonComponent implements OnInit {

  @Input() rmButtonConfig!: RmButton;
  @Input() disabled: boolean = false;
  @Output() rmButtonClick: EventEmitter<void> = new EventEmitter<void>();

  ButtonSizeEnum = ButtonSizeEnum;
  ButtonColorEnum = ButtonColorEnum;
  public size: string = '';
  public color: string = '';

  ngOnInit(): void {
    this.rmButtonConfigOptions();
  }

  onclick(): void {
    this.rmButtonClick.emit();
  }

  rmButtonConfigOptions() {
    const button = 'rm-button__';
    const sizeMap = {
      [ButtonSizeEnum.SMALL]: `${button}small`,
      [ButtonSizeEnum.MEDIUM]: `${button}medium`,
      [ButtonSizeEnum.BIG]: `${button}big`,
    };

    const colorMap = {
      [ButtonColorEnum.SUCCESS]: `${button}success`,
      [ButtonColorEnum.ERROR]: `${button}error`,
      [ButtonColorEnum.INFO]: `${button}info`,
      [ButtonColorEnum.WARNING]: `${button}warning`,
      [ButtonColorEnum.DEFAULT]: `${button}default`,
    };

    this.size = sizeMap[this.rmButtonConfig.size];
    this.color = colorMap[this.rmButtonConfig.color];
  }
}

