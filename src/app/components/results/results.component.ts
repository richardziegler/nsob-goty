import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import Chart from 'chart.js';
import { BallotsService } from 'src/app/services/ballots/ballots.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})

export class ResultsComponent implements OnInit {
  displayedColumns: string[] = ['title', 'total'];
  loading = true;
  tData = [];
  dataSource;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private ballotsService: BallotsService) { }

  ngOnInit() {
    this.ballotsService.getResults().subscribe(data => {
      const jsonData = JSON.parse(data);
      jsonData.bestGame.forEach(game => {
        this.tData.push(game);
      });
      this.dataSource = new MatTableDataSource(this.tData);
      this.dataSource.sort = this.sort;
      this.loading = false;
    }, error => {
      console.log('error', error);
    });


    // const ctx = "myChart";
    // var myChart = new Chart(ctx, {
    //   type: 'bar',
    //   data: {
    //       labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    //       datasets: [{
    //           label: '# of Votes',
    //           data: [12, 19, 3, 5, 2, 3],
    //           backgroundColor: [
    //               'rgba(255, 99, 132, 0.2)',
    //               'rgba(54, 162, 235, 0.2)',
    //               'rgba(255, 206, 86, 0.2)',
    //               'rgba(75, 192, 192, 0.2)',
    //               'rgba(153, 102, 255, 0.2)',
    //               'rgba(255, 159, 64, 0.2)'
    //           ],
    //           borderColor: [
    //               'rgba(255,99,132,1)',
    //               'rgba(54, 162, 235, 1)',
    //               'rgba(255, 206, 86, 1)',
    //               'rgba(75, 192, 192, 1)',
    //               'rgba(153, 102, 255, 1)',
    //               'rgba(255, 159, 64, 1)'
    //           ],
    //           borderWidth: 1
    //       }]
    //   },
    //   options: {
    //       scales: {
    //           yAxes: [{
    //               ticks: {
    //                   beginAtZero:true
    //               }
    //           }]
    //       }
    //   }
  // });
  }

  getTotalScore() {
    return this.tData;
  }

}
