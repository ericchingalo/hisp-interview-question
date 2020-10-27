import { Component, Input, OnInit } from '@angular/core';
import { JsonObject } from '../models/json-object.model';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
})
export class TablesComponent implements OnInit {
  @Input() jsonObject: JsonObject;
  constructor() {}

  ngOnInit() {}
}
