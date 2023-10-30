import { NgModule } from "@angular/core";
import { DetailComponent } from './container/detail.component';
import { DetailRoutingModule } from "./detail-routing.module";
import { DetailService } from './services/detail.service';

@NgModule({
    declarations: [DetailComponent],
    imports: [
        DetailRoutingModule
    ],
    providers: [DetailService]
})

export class DetailModule { }