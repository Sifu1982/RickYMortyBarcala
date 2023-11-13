import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { SharedCardComponent } from "./card/container/shared-card.component";


@NgModule({
  declarations: [SharedCardComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [SharedCardComponent]
})

export class SharedModule { }
