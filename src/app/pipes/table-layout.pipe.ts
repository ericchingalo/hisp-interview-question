import { Pipe, PipeTransform } from '@angular/core';
import { JsonObject } from '../models/json-object.model';

import * as _ from 'lodash';
import { getName } from '../helpers/field-name.helper';
import { getInvertedColumns } from '../helpers/inverted-columns.helper';
import { TableLayout } from '../models/table-layout.model';
import { getTableType } from '../helpers/table-type.helper';

@Pipe({
  name: 'tableLayout',
})
export class TableLayoutPipe implements PipeTransform {
  /**
   * this is the pipe responsible for creating the table object
   *
   * @param json json object from which the table is created
   * @param isInverted a boolean that specifies the orientation of the table
   *
   * @returns table layout
   */
  transform(json: JsonObject, isInverted: boolean = false): TableLayout {
    let tableHeaders = [];

    const tableType = getTableType(json, isInverted);
    const otherColumns = _.map(
      !isInverted ? json.metaData.dimensions.ou : json.metaData.dimensions.dx,
      (ou) => {
        return getName(ou, json);
      }
    );
    tableHeaders = [tableType, ...otherColumns];

    const tableRows = !isInverted
      ? _.map(json.rows, (row) => {
          return [getName(row[0], json), row[2]];
        })
      : getInvertedColumns(json);
    return {
      tableHeaders,
      tableRows,
    };
  }
}
