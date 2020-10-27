import { JsonObject } from '../models/json-object.model';

/**
 * returns the table type
 *
 * @param json json object to be used to generate table
 * @param isInverted orientation of the table
 */
export function getTableType(json: JsonObject, isInverted: boolean): string {
  return !isInverted
    ? `${json.metaData.names.ou} vs ${json.metaData.names.dx}`
    : `${json.metaData.names.dx} vs ${json.metaData.names.ou}`;
}
