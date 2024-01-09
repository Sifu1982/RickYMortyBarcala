import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ButtonColorEnum, ButtonSizeEnum, RmButton } from "../../interfaces/rm-button.interface";

@Component({
  selector: 'rm-pagination',
  templateUrl: 'rm-pagination.component.html',
  styleUrls: ['rm-pagination.component.scss']
})
export class RmPaginationComponent {

  @Output() nextPressed: EventEmitter<void> = new EventEmitter<void>();
  @Output() prevPressed: EventEmitter<void> = new EventEmitter<void>();
  @Input() disablePrevButton: boolean = true;
  @Input() disableNextButton: boolean = false;
  @Input() characterCount: number = 0;
  @Input() pages: number = 0;
  @Input() counter: number = 1;

  public nextButtonConfig: RmButton = {
    text: '>',
    size: ButtonSizeEnum.SMALL,
    color: ButtonColorEnum.SUCCESS
  };

  public prevButtonConfig: RmButton = {
    text: '<',
    size: ButtonSizeEnum.SMALL,
    color: ButtonColorEnum.SUCCESS
  };

  onNextPressed() {
    this.nextPressed.emit();
  }

  onPrevPressed() {
    this.prevPressed.emit();
  }
}
