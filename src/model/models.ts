export interface MockData {
  id: number;
  city: string;
  state: string;
  type: string;
  price: number;
}

export interface ProcessingObj {
  [key: string]: SortedData;
}

export interface SortedData extends MockData {
  avg?: number;
  total?: number;
  count: number;
}

export interface Column {
  title: string;
  dataIndex: string;
}

export interface DynamicString {
  [key: string]: string;
}

export const rawColumns: Column[] = [
  {
    title: "State",
    dataIndex: "state",
  },
  {
    title: "City",
    dataIndex: "city",
  },
  {
    title: "Type",
    dataIndex: "type",
  },
  {
    title: "Price",
    dataIndex: "price",
  },
];

export const columns: Column[] = [
  {
    title: "State",
    dataIndex: "state",
  },
  {
    title: "City",
    dataIndex: "city",
  },
  {
    title: "Total",
    dataIndex: "count",
  },
  {
    title: "Avg. Price",
    dataIndex: "avg",
  },
];

export const columnsWithType: Column[] = [
  {
    title: "State",
    dataIndex: "state",
  },
  {
    title: "City",
    dataIndex: "city",
  },
  {
    title: "Type",
    dataIndex: "type",
  },
  {
    title: "Total",
    dataIndex: "count",
  },
  {
    title: "Avg. Price",
    dataIndex: "avg",
  },
];
