import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { CharacterGenderEnum } from "src/app/modules/home/enums/home-character-gender.enum";
import { RmForm } from "../../interfaces/rm-form.interface";

@Component({
  selector: 'rm-form',
  templateUrl: 'rm-form.component.html',
  styleUrls: ['rm-form.component.scss']
})

export class RmFormComponent implements OnInit {

  @Output() genderChanged = new EventEmitter<RmForm>();

  public genderEnum = CharacterGenderEnum;
  public searchForm!: FormGroup;
  public genderOptions: CharacterGenderEnum[] = [...Object.values(CharacterGenderEnum)];

  ngOnInit(): void {
    this.onGenderChange()
  }

  private onGenderChange() {
    this.searchForm = new FormGroup({
      gender: new FormControl(CharacterGenderEnum.ALL)
    });

    this.searchForm.get('gender')?.valueChanges.subscribe((formValue: CharacterGenderEnum) => {
      this.genderChanged.emit({ gender: formValue });
    });
  }
}
