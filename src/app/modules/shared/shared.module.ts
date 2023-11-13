import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { SharedCardComponent } from "./card/container/shared-card.component";
import { RmButtonComponent } from "./components/rm-button/rm-button.component";


@NgModule({
  declarations: [SharedCardComponent, RmButtonComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [SharedCardComponent]
})

export class SharedModule { }
