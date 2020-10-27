import { Pipe, PipeTransform } from '@angular/core';
import { JsonObject } from '../models/json-object.model';

import * as _ from 'lodash';

@Pipe({
  name: 'tableLayout',
})
export class TableLayoutPipe implements PipeTransform {
  transform(json: JsonObject, isInverted: boolean = false): any {
    let tableHeaders = [];

    const tableType = !isInverted
      ? `${json.metaData.names.ou} vs ${json.metaData.names.dx}`
      : `${json.metaData.names.dx} vs ${json.metaData.names.ou}`;
    const otherColumns = _.map(
      !isInverted ? json.metaData.dimensions.ou : json.metaData.dimensions.dx,
      (ou) => {
        return this.getName(ou, json);
      }
    );
    tableHeaders = [tableType, ...otherColumns];

    const tableRows = !isInverted
      ? _.map(json.rows, (row) => {
          return [this.getName(row[0], json), row[2]];
        })
      : this.getInvertedColumns(json);

    const table = {
      tableHeaders,
      tableRows,
    };
    return table;
  }

  getName(id: string, json: JsonObject): string {
    return _.get(json, `metaData.names.${id}`);
  }

  getInvertedColumns(json: JsonObject) {
    const sanitizedRows = [];

    _.forEach(json.metaData.dimensions.ou, (unit) => {
      let ouRow = [this.getName(unit, json)];
      const ouRows = _.filter(json.rows, (row) => {
        return unit === row[1];
      });

      _.forEach(json.metaData.dimensions.dx, (place) => {
        const dataRow = _.find(ouRows, (row) => {
          return place === row[0];
        });
        ouRow = [...ouRow, dataRow[2]];
      });

      sanitizedRows.push(ouRow);
    });

    return sanitizedRows;
  }
}
