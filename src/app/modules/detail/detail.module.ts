import { NgModule } from "@angular/core";
import { DetailComponent } from './container/detail.component';
import { DetailRoutingModule } from "./detail-routing.module";

@NgModule({
    declarations: [DetailComponent],
    imports: [
        DetailRoutingModule
    ],
    providers: []
})

export class DetailModule { }