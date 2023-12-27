import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { HomeService } from "src/app/modules/home/services/home.service";
import { ButtonColorEnum, ButtonSizeEnum, RmButton } from "../../interfaces/rm-button.interface";

@Component({
  selector: 'rm-pagination',
  templateUrl: 'rm-pagination.component.html',
  styleUrls: ['rm-pagination.component.scss']
})
export class RmPaginationComponent implements OnInit {

  @Output() nextPressed: EventEmitter<void> = new EventEmitter<void>();
  @Output() prevPressed: EventEmitter<void> = new EventEmitter<void>();
  public disablePrevButton: boolean = true;
  public disableNextButton: boolean = false;
  public characterCount: number = 0;
  public pages: number = 0;
  public counter: number = 1;

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.homeService.paginationInfo.subscribe(({ characterCount, pages, resetCounter, previousPage }) => {
      this.characterCount = characterCount;
      this.pages = pages;
      if (resetCounter) this.counter = resetCounter;
      this.disablePrevButton = !!previousPage ? false : true;
      this.disableNextButton = this.counter === this.pages;
    });
  }

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
    this.counter++;
    this.nextPressed.emit();
  }

  onPrevPressed() {
    this.counter--;
    this.prevPressed.emit();
  }
}
