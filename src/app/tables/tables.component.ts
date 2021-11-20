import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css'],
})
export class TablesComponent implements OnInit {
  tables$ = of([
    { name: 'Table 01', id: '001' },
    { name: 'Table 02', id: '002' },
    { name: 'Table 03', id: '003' },
    { name: 'Table 04', id: '004' },
    { name: 'Table 05', id: '005' },
    { name: 'Table 06', id: '006' },
  ]);

  constructor() {}

  ngOnInit() {}
}
