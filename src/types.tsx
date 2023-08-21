export interface DynamicObject {
  [key: string]: string | number;
}

export interface sectionedDataType {
  keyName: string;
  date?: string | number;
  values: DynamicObject[];
}
