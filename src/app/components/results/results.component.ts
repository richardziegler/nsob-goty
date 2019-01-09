import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})

export class ResultsComponent implements OnInit {

  displayedColumns: string[] = ['title', 'score'];
  
  
  tData = [{
    "title": "Tampflex",
    "score": 64
  }, {
    "title": "Pannier",
    "score": 61
  }, {
    "title": "Span",
    "score": 60
  }, {
    "title": "Pannier",
    "score": 53
  }, {
    "title": "Bamity",
    "score": 49
  }];

  constructor() { }

  ngOnInit() {
    const ctx = "myChart";
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
      }
  });
  }

  getTotalScore() {
    return this.tData.map(t => t.score).reduce((acc, value) => acc + value, 0);
  }

}
