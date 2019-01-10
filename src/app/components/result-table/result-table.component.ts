import { Component, OnInit, Input } from '@angular/core';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.css']
})
export class ResultTableComponent implements OnInit {
  @Input() dataSource;
  @Input() header: string;
  displayedColumns: string[] = ['title', 'total'];

  constructor() { }

  ngOnInit() {
  }

}
