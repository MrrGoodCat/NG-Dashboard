import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { AppRoutingModule } from "../app-routing.module";
import { SharedModule } from "../shared/shared.module";
import { LineChartComponent } from './line-chart.component';
import { DashboardService } from './dashboard.service';
import { HttpClientModule } from "@angular/common/http";
import { DoughnutChartComponent } from './doughnut-chart.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  imports: [
    SharedModule,
    HttpClientModule,
    MDBBootstrapModule,
    AppRoutingModule
  ],
  exports: [
    DashboardComponent
  ],
  declarations: [DashboardComponent, LineChartComponent, DoughnutChartComponent],
  providers: [DashboardService]
})
export class DashboardModule { }
