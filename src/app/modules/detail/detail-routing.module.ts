import { RouterModule, Routes } from "@angular/router";
import { DetailComponent } from "./container/detail.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
        path: '',
        component: DetailComponent
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)]
})

export class DetailRoutingModule { }