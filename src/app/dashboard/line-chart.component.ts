import { Component, OnInit } from '@angular/core';
import { Chart } from "chart.js";
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.sass']
})
export class LineChartComponent implements OnInit {

  chart = [];

  constructor(private weather: DashboardService) { }

  ngOnInit() {
    this.weather.dailyForecast()
    .subscribe(res => {
      let temp_max = res['list'].map(res => res.main.temp_max);
      let temp_min = res['list'].map(res => res.main.temp_min);
      let alldates = res['list'].map(res => res.dt);

      let weatherDates = [];
       alldates.forEach((res) => {
        let jsdate = new Date(res * 1000);
        weatherDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit'}))
      })

      console.log(weatherDates);

      this.chart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: weatherDates,
          datasets: [
            { 
              data: temp_max,
              borderColor: "#3cba9f",
              fill: 'origin'
            },
            { 
              data: temp_min,
              borderColor: "#ffcc00",
              backgroundColor: "#cc65fe",
              fill: false,
              lineTension: 0
            },
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: true,
              gridLines: {
                color: 'rgba(0, 0, 0, 0.3)',
              },
              ticks: {
              }
            }],
            yAxes: [{
              display: true,
              gridLines: {
                color: 'rgba(0, 0, 0, 0.3)'
              },
              ticks: {
              }
            }],
          }
        }
      });     
    })
  }
}
