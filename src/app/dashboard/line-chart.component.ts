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
  data = [{x: 1, y: 0}, {x: 6, y: 100}, {x: 9, y: 47}, {x: 15, y: 78}, {x: 20, y: 26}, {x: 24, y: 45}, {x: 31, y: 0}];
  dataTwo = [{x: 1, y: 0}, {x: 9, y: 90}, {x: 13, y: 29}, {x: 17, y: 71}, {x: 23, y: 20}, {x: 28, y: 39}, {x: 31, y: 0}];
  labels = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
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
          labels: this.labels,
          datasets: [
            {
              data: this.data,
              borderColor: "#3cba9f",
              lineTension: 0
            },
            {
              data: this.dataTwo,
              borderColor: "#ffcc00",
              lineTension: 0
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true,
              ticks: {
                min: 0,
                max: 120,
                stepSize: 30
              }
            }]
          }
        }
      });

      // this.chart = new Chart('canvas', {
      //   type: 'line',
      //   data: {
      //     labels: weatherDates,
      //     datasets: [
      //       { 
      //         data: temp_max,
      //         borderColor: "#3cba9f",
      //         fill: 'origin'
      //       },
      //       { 
      //         data: temp_min,
      //         borderColor: "#ffcc00",
      //         backgroundColor: "#cc65fe",
      //         fill: false,
      //         lineTension: 0
      //       },
      //     ]
      //   },
      //   options: {
      //     legend: {
      //       display: false
      //     },
      //     scales: {
      //       xAxes: [{
      //         display: true,
      //         gridLines: {
      //           color: 'rgba(0, 0, 0, 0.3)',
      //         },
      //         ticks: {
      //         }
      //       }],
      //       yAxes: [{
      //         display: true,
      //         gridLines: {
      //           color: 'rgba(0, 0, 0, 0.3)'
      //         },
      //         ticks: {
      //         }
      //       }],
      //     }
      //   }
      // });     
    })
  }
}
