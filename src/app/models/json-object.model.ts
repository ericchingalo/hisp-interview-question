export interface JsonObject {
  header: Array<any>;
  rows: Array<string[]>;
  metaData: {
    dimensions: Dimensions;
    names: any;
  };
}

export interface Header {
  id: string;
  name: string;
}

export interface Dimensions {
  dx: Array<string>;
  ou: Array<string>;
}
