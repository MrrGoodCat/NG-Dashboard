import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { AppRoutingModule } from "../app-routing.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    DashboardComponent
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
