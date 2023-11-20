import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { CharacterGenderEnum } from "src/app/modules/home/enums/home-character-gender.enum";

@Component({
  selector: 'rm-form',
  templateUrl: 'rm-form.component.html',
  styleUrls: ['rm-form.component.scss']
})

export class RmFormComponent implements OnInit {

  @Output() genderChanged = new EventEmitter<string>();

  public genderEnum = CharacterGenderEnum;
  public genderControl!: FormControl;
  public searchForm!: FormGroup;
  public genderOptions: string[] = ['All', ...Object.values(CharacterGenderEnum)];

  constructor(private fb: FormBuilder) {

    this.genderControl = new FormControl('All');

    this.searchForm = this.fb.group({
      gender: this.genderControl
    });
  }

  ngOnInit(): void {
    this.onGenderChange()
  }

  onGenderChange() {
    this.genderControl.valueChanges.subscribe((formValue: string) => {
      this.genderChanged.emit(formValue);
    });
  }
}
