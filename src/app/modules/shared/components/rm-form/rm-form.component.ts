import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { CharacterGenderEnum } from "src/app/modules/home/enums/home-character-gender.enum";
import { ButtonColorEnum, ButtonSizeEnum, RmButton } from "../../interfaces/rm-button.interface";
import { RmForm } from "../../interfaces/rm-form.interface";

@Component({
  selector: 'rm-form',
  templateUrl: 'rm-form.component.html',
  styleUrls: ['rm-form.component.scss']
})

export class RmFormComponent implements OnInit {

  @Output() formChanged = new EventEmitter<RmForm>();
  @Output() resetPressed = new EventEmitter<RmForm>();

  public genderEnum = CharacterGenderEnum;
  public searchForm!: FormGroup;
  public genderOptions: CharacterGenderEnum[] = [...Object.values(CharacterGenderEnum)];

  public buttonConfig: RmButton = {
    text: 'Reset',
    size: ButtonSizeEnum.SMALL,
    color: ButtonColorEnum.WARNING
  };

  ngOnInit(): void {
    this.onFormChange()
  }

  private onFormChange() {
    this.searchForm = new FormGroup({
      name: new FormControl(''),
      gender: new FormControl(CharacterGenderEnum.ALL)
    });
    this.searchForm.valueChanges.subscribe((formValue: RmForm) => {
      this.formChanged.emit(formValue);
    });
  }

  public onResetPressed() {
    this.searchForm.get('name')?.setValue('');
    this.searchForm.get('gender')?.setValue(CharacterGenderEnum.ALL);
    this.resetPressed.emit()
  }

  trackByGender(index: number, gender: CharacterGenderEnum): string {
    return gender;
  }
}
