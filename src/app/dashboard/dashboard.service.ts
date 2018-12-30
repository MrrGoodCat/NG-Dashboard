import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/filter';

@Injectable({
  providedIn: 'root'
})

export class DashboardService {

  constructor(private httpClient: HttpClient) { }

  private headers = new HttpHeaders()
            .set("X-CustomHeader", "custom header value");

  dailyForecast() {
    return this.httpClient.get("https://samples.openweathermap.org/data/2.5/weather?q=London&appid=b6907d289e10d714a6e88b30761fae22")
    .pipe(map(result => result, Headers));
  }
}
