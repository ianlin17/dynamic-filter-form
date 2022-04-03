import { MockData, FilterOption, TempObj, SortedData } from "./model/models";
export function processData (data: MockData[], filterData: FilterOption) {
  const hasResult = checkOptions(data, filterData);
  if (hasResult.length < 1) return data;
  const result: TempObj = {};
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

const handleOptions = (data: MockData[], filterData: any) => {
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

const checkOptions = (data: MockData[], filterData: any) => {
  let result: any = [];
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


export const mockData =  [
    {
      id: 1,
      city: "Atlanta",
      state: "Georgia",
      type: "Condo",
      price: 371,
    },
    {
      id: 2,
      city: "Atlanta",
      state: "Georgia",
      type: "Apartment",
      price: 218,
    },
    {
      id: 3,
      city: "Atlanta",
      state: "Georgia",
      type: "Single-family",
      price: 848,
    },
    {
      id: 4,
      city: "Clearwater",
      state: "Florida",
      type: "Townhomes",
      price: 2823,
    },
    {
      id: 5,
      city: "Clearwater",
      state: "Florida",
      type: "Apartment",
      price: 1309,
    },
    {
      id: 6,
      city: "Clearwater",
      state: "Florida",
      type: "Condo",
      price: 2914,
    },
    {
      id: 7,
      city: "Clearwater",
      state: "Florida",
      type: "Single-family",
      price: 2266,
    },
    {
      id: 8,
      city: "Atlanta",
      state: "Georgia",
      type: "Single-family",
      price: 7266,
    },
    {
      id: 9,
      city: "Atlanta",
      state: "Georgia",
      type: "Townhomes",
      price: 4614,
    },
    {
      id: 10,
      city: "Atlanta",
      state: "Georgia",
      type: "Apartment",
      price: 3813,
    },
    {
      id: 11,
      city: "Columbus",
      state: "Georgia",
      type: "Condo",
      price: 6153,
    },
    {
      id: 12,
      city: "Columbus",
      state: "Georgia",
      type: "Single-family",
      price: 5888,
    },
    {
      id: 13,
      city: "Columbus",
      state: "Georgia",
      type: "Apartment",
      price: 846,
    },
    {
      id: 14,
      city: "Columbus",
      state: "Georgia",
      type: "Apartment",
      price: 1112,
    },
    {
      id: 15,
      city: "Columbus",
      state: "Georgia",
      type: "Apartment",
      price: 4193,
    },
    {
      id: 16,
      city: "Columbus",
      state: "Georgia",
      type: "Condo",
      price: 6193,
    },
    {
      id: 17,
      city: "Seattle",
      state: "Washington",
      type: "Single-family",
      price: 6193,
    },
    {
      id: 18,
      city: "Seattle",
      state: "Washington",
      type: "Condo",
      price: 6237,
    },
    {
      id: 19,
      city: "Seattle",
      state: "Washington",
      type: "Single-family",
      price: 2813,
    },
    {
      id: 20,
      city: "Columbus",
      state: "Georgia",
      type: "Apartment",
      price: 321,
    },
    {
      id: 21,
      city: "Columbus",
      state: "Georgia",
      type: "Apartment",
      price: 913,
    },
    {
      id: 22,
      city: "Columbus",
      state: "Georgia",
      type: "Apartment",
      price: 913,
    },
    {
      id: 23,
      city: "Atlanta",
      state: "Georgia",
      type: "Condo",
      price: 115,
    },
    {
      id: 24,
      city: "Atlanta",
      state: "Georgia",
      type: "Condo",
      price: 735,
    },
  ];
// exports = mockData

export const mockFilterOne = {
  state: 'Georgia',
  city: '',
  type: ''
}
// exports = mockFilterOne

export const mockFilterTwo = {
  state: 'Georgia',
  city: 'Clearwater',
  type: ''
}

export const testResultOne = [
  {
    avg: 2247,
    city: "Atlanta",
    count: 8,
    id: 1,
    price: 17980,
    state: "Georgia",
    type: "Condo"
  },
  {
    avg: 2948,
    city: "Columbus",
    count: 9,
    id: 11,
    price: 26532,
    state: "Georgia",
    type: "Condo",
  }
]