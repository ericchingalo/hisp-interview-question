import * as _ from 'lodash';
import { JsonObject } from '../models/json-object.model';
import { getName } from './field-name.helper';

/**
 *
 * @param json json object to be piped
 */
export function getInvertedColumns(json: JsonObject) {
  const sanitizedRows = [];

  // groups each row of data to a respective ou
  _.forEach(json.metaData.dimensions.ou, (unit) => {
    let ouRow = [getName(unit, json)];
    const ouRows = _.filter(json.rows, (row) => {
      return unit === row[1];
    });

    // maps the ou filtered data into values for respective dx
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
