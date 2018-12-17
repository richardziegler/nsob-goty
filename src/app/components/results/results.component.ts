import { Component, OnInit } from '@angular/core';

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
  }

  getTotalScore() {
    return this.tData.map(t => t.score).reduce((acc, value) => acc + value, 0);
  }

}
