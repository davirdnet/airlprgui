import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { LogsComponentDataSource } from './logs-component-datasource';

@Component({
  selector: 'app-logs-component',
  templateUrl: './logs-component.component.html',
  styleUrls: ['./logs-component.component.css']
})
export class LogsComponentComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: LogsComponentDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new LogsComponentDataSource(this.paginator, this.sort);
  }
}
