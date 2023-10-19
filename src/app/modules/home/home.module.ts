import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './container/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeService } from './services/home.service';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  providers: [HomeService]
})
export class HomeModule { }
