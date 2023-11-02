import { NgModule } from "@angular/core";
import { DetailComponent } from './container/detail.component';
import { DetailRoutingModule } from "./detail-routing.module";
import { DetailService } from './services/detail.service';
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [DetailComponent],
    imports: [
        DetailRoutingModule,
        SharedModule
    ],
    providers: [DetailService]
})

export class DetailModule { }