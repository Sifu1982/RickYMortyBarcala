import { NgModule } from "@angular/core";
import { DetailComponent } from './container/detail.component';
import { DetailService } from './services/detail.service';
import { CommonModule } from "@angular/common";
import { HomeRoutingModule } from "../home/home-routing.module";
import { DetailRoutingModule } from "./detail-routing.module";

@NgModule({
    declarations: [DetailComponent],
    imports: [
        CommonModule,
        DetailRoutingModule
    ],
    providers: [DetailService]
})

export class DetailModule { }