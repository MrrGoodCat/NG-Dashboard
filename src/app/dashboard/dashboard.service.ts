import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/filter';

@Injectable({
  providedIn: 'root'
})

export class DashboardService {

  constructor(private httpClient: HttpClient) { }

  //private headers = new HttpHeaders({'Access-Control-Allow-Origin': '*', "Access-Control-Allow-Headers": "*","Access-Control-Allow-Methods": "GET, POST, OPTIONS"});

  dailyForecast() {
    return this.httpClient.get("https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=a5b50d7e7da8c9c06c7e2fe623ec0f6e")
    .pipe(map(result => result));
  }
}
