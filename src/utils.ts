import moment from 'moment';
import type { DynamicObject, sectionedDataType } from './types';

export const modifySectionList = (
  data: DynamicObject[] | null | undefined,
  jsonKey: string,
  isDate?: boolean
): sectionedDataType[] | null => {
  const dateFormat = 'MMM DD YYYY h:mm:ss A';
  let keyName: string | null | undefined = null;

  if (!data) return null;

  const isValue = jsonKey && data[0] ? !(jsonKey in data[0]) : false;

  const keysArray = Object.keys(data[0] as DynamicObject);

  const filteredList = isValue
    ? data?.filter((item) =>
        keysArray.some(
          (keyVal) => item[keyVal]?.toLowerCase() === jsonKey?.toLowerCase()
        )
      )
    : data;

  const groupedData: sectionedDataType[] = filteredList.reduce(
    (result: sectionedDataType[], obj: DynamicObject) => {
      keyName = isValue
        ? Object.keys(obj).find(
            (key) => obj[key]?.toLowerCase() === jsonKey?.toLowerCase()
          )
        : jsonKey;

      const existedData = result?.find((item) => {
        if (keyName)
          return item.keyName?.toLowerCase() === obj[keyName]?.toLowerCase();
        return false;
      });

      if (!existedData) {
        if (keyName) {
          const dataObj: sectionedDataType = {
            keyName: obj[keyName] as string,
            values: [obj],
          };
          if (isDate) {
            dataObj.date = obj.date;
          }
          result.push(dataObj);
        }
      } else {
        if (
          moment(obj.date, dateFormat).isBefore(
            moment(existedData?.date, dateFormat)
          )
        ) {
          existedData.date = obj?.date;
          existedData?.values.unshift(obj);
        } else {
          existedData?.values.push(obj);
        }
      }

      return result;
    },
    []
  );

  if (isDate) {
    sortDateData(groupedData);
  } else if (keyName) {
    groupedData.sort((a, b) =>
      a?.keyName?.toLowerCase().localeCompare(b?.keyName?.toLowerCase())
    );
  }

  return groupedData;
};

const sortDateData = (data: sectionedDataType[] | null | undefined) => {
  if (!data) return;

  data?.sort((a, b) => {
    const dateA = moment(a.date, 'MMM DD YYYY h:mm:ss A');
    const dateB = moment(b.date, 'MMM DD YYYY h:mm:ss A');
    return dateA.diff(dateB);
  });
};
