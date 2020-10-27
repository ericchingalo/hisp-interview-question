import * as _ from 'lodash';
import { JsonObject } from '../models/json-object.model';

/**
 * the function fetches the name of header as per json object
 *
 * @param id the header id for the value as per the json object
 * @param json json object
 */
export function getName(id: string, json: JsonObject): string {
  return _.get(json, `metaData.names.${id}`);
}
