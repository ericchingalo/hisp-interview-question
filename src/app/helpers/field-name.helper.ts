import * as _ from 'lodash';
import { JsonObject } from '../models/json-object.model';

export function getName(id: string, json: JsonObject): string {
  return _.get(json, `metaData.names.${id}`);
}
