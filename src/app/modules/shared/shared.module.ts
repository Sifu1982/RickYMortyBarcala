import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedCardComponent } from "./card/container/shared-card.component";
import { RmButtonComponent } from "./components/rm-button/rm-button.component";
import { RmFormComponent } from "./components/rm-form/rm-form.component";
import { RmPaginationComponent } from "./components/rm-pagination/rm-pagination.component";

@NgModule({
  declarations: [SharedCardComponent, RmButtonComponent, RmFormComponent, RmPaginationComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [SharedCardComponent, RmButtonComponent, RmFormComponent, RmPaginationComponent]
})

export class SharedModule { }
