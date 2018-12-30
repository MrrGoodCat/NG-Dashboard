import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { AppRoutingModule } from "../app-routing.module";
import { SharedModule } from "../shared/shared.module";
import { LineChartComponent } from './line-chart.component';
import { DashboardService } from './dashboard.service';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [
    SharedModule,
    HttpClientModule,
    AppRoutingModule
  ],
  exports: [
    DashboardComponent
  ],
  declarations: [DashboardComponent, LineChartComponent],
  providers: [DashboardService]
})
export class DashboardModule { }
