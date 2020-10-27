import { Component, OnInit } from '@angular/core';
import * as object from './constants/object.json';
import { JsonObject } from './models/json-object.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  jsonObject: JsonObject;

  constructor() {}

  ngOnInit() {
    this.jsonObject = object['default'];
  }
}
