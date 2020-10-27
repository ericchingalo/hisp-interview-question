import * as _ from 'lodash';
import { JsonObject } from '../models/json-object.model';
import { getName } from './field-name.helper';

export function getInvertedColumns(json: JsonObject) {
  const sanitizedRows = [];

  _.forEach(json.metaData.dimensions.ou, (unit) => {
    let ouRow = [getName(unit, json)];
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
