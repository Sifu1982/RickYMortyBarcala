import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { DetailComponent } from './container/detail.component';
import { DetailRoutingModule } from "./detail-routing.module";
import { DetailService } from './services/detail.service';

@NgModule({
    declarations: [DetailComponent],
    imports: [
        DetailRoutingModule,
        SharedModule,
        CommonModule
    ],
    providers: [DetailService]
})

export class DetailModule { }