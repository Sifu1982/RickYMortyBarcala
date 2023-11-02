import { NgModule } from "@angular/core";
import { SharedCardComponent } from "./modules/card/container/shared-card.component";
import { CommonModule } from "@angular/common";


@NgModule({
    declarations: [SharedCardComponent],
    imports:[CommonModule],
    exports: [SharedCardComponent]
})

export class SharedModule { }