import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SidebarModule } from "./sidebar/sidebar.module";
import { DashboardModule } from "./dashboard/dashboard.module";
import { SharedModule } from "./shared/shared.module";
import { AppRoutingModule } from './app-routing.module';
import { ReportsModule } from "./reports/reports.module";

import { AppComponent } from './app.component';
import { SidebarComponent } from "./sidebar/sidebar.component";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    SidebarModule,
    DashboardModule,
    SharedModule,
    ReportsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
