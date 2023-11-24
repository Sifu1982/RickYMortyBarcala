import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedCardComponent } from "./card/container/shared-card.component";
import { RmButtonComponent } from "./components/rm-button/rm-button.component";
import { RmFormComponent } from "./components/rm-form/rm-form.component";

@NgModule({
  declarations: [SharedCardComponent, RmButtonComponent, RmFormComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [SharedCardComponent, RmButtonComponent, RmFormComponent]
})

export class SharedModule { }
