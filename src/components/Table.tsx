import { Column, MockData, SortedData } from "../model/models";
import { Table } from "antd";
import "antd/dist/antd.css";
type Props = {
  cols: Column[];
  data: SortedData[] | MockData[];
  loading: boolean;
};
const CustomTable: React.FC<Props> = ({ cols, data, loading }) => {
  return (
    <Table columns={cols} dataSource={data} loading={loading} rowKey={"id"} />
  );
};

export default CustomTable;
