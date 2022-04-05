import { DynamicString, MockData, SortedData, ProcessingObj } from "../model/models";
export const getStateSelections = (data: MockData[]) =>
  Array.from(new Set(data.map((x: MockData) => x.state)));
export const getCitySelections = (data: MockData[]) =>
  Array.from(new Set(data.map((x: MockData) => x.city)));
export const getTypeSelections = (data: MockData[]) =>
  Array.from(new Set(data.map((x: MockData) => x.type)));
export function processData(data: MockData[], filterData: DynamicString) {
  const hasResult = checkOptions(data, filterData);
  if (hasResult.length < 1) return data;
  const result: ProcessingObj = {};
  const optionResult = handleOptions(data, filterData);
  const values = optionResult.values();
  for (let i = 0; i < optionResult.length; i++) {
    let cur = values.next().value;
    let keyList = result.hasOwnProperty(cur.city);
    if (keyList) {
      result[cur.city]["count"] += 1;
      result[cur.city]["price"] += cur.price;
    } else {
      result[cur.city] = {
        state: cur.state,
        city: cur.city,
        count: 1,
        price: cur.price,
        id: cur.id,
        type: cur.type,
      };
    }
  }
  const list = Object.values(result).map((c: SortedData) => {
    let avg = Math.floor(c.price / c.count);
    return {
      ...c,
      avg: avg,
    };
  });
  return list;
}

export const handleOptions = (data: MockData[], filterData: DynamicString) => {
  Object.keys(filterData).forEach((name) => {
    if (!!filterData[name]) {
      switch (name) {
        case "state":
          data = data.filter((x: MockData) => x.state === filterData[name]);
          break;
        case "city":
          data = data.filter((x: MockData) => x.city === filterData[name]);
          break;
        case "type":
          data = data.filter((x: MockData) => x.type === filterData[name]);
          break;
        default:
          break;
      }
    }
  });
  return data;
};

export const checkOptions = (data: MockData[], filterData: DynamicString) => {
  let result: MockData[][] = [];
  Object.keys(filterData).forEach((name) => {
    if (!!filterData[name]) {
      switch (name) {
        case "state":
          const stateList = data.filter(
            (x: MockData) => x.state === filterData[name]
          );
          if (stateList.length > 1) result.push(stateList);
          break;
        case "city":
          const cityList = data.filter(
            (x: MockData) => x.city === filterData[name]
          );
          if (cityList.length > 1) result.push(cityList);
          break;
        case "type":
          const typeList = data.filter(
            (x: MockData) => x.type === filterData[name]
          );
          if (typeList.length > 1) result.push(typeList);
          break;
        default:
          break;
      }
    }
  });
  return result;
};
