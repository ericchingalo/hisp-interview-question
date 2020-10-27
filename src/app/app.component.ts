import { Component } from '@angular/core';
import * as object from './constants/object.json';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'hisp-interview-question';

  constructor() {
    console.log(object['default']);
  }
}
