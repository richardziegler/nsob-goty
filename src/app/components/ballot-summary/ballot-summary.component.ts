import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ballot-summary',
  templateUrl: './ballot-summary.component.html',
  styleUrls: ['./ballot-summary.component.css']
})
export class BallotSummaryComponent implements OnInit {
  @Input() games: string[];
  @Input() category: string;

  constructor() { }

  ngOnInit() {
  }

}
