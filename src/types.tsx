export interface DynamicObject {
  [key: string]: string;
}

export interface sectionedDataType {
  keyName: string;
  date?: string;
  values: DynamicObject[];
}
