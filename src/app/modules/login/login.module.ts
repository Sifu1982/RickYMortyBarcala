import { NgModule } from "@angular/core";
import { LoginComponent } from "./container/login.component";
import { LoginRoutingModule } from "./login-routing.module";
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";


@NgModule ({
  declarations: [LoginComponent],
  imports: [
    LoginRoutingModule,
    SharedModule,
    FormsModule,
    CommonModule
  ]

})
export class LoginModule { }
