import { NgModule } from "@angular/core";
import { LoginComponent } from "./container/login.component";
import { LoginRoutingModule } from "./login-routing.module";
import { SharedModule } from "../shared/shared.module";


@NgModule ({
  declarations: [LoginComponent],
  imports: [
    LoginRoutingModule,
    SharedModule
  ]

})
export class LoginModule { }
