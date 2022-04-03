import { Select } from "antd";
import "antd/dist/antd.css";
const { Option } = Select;
type Props = {
  options: string[];
  defaultValue: undefined | string;
  isLoading: boolean;
  type: string;
  changeState: (title: string) => void;
};

const CustomSelect: React.FC<Props> = ({
  options,
  isLoading,
  defaultValue,
  type,
  changeState,
}) => {
  const changeVal = (info: string) => changeState(info);
  return (
    <Select
      showSearch
      loading={isLoading}
      allowClear={true}
      value={defaultValue === "" ? undefined : defaultValue}
      placeholder={`Select for ${type}`}
      onChange={changeVal}
    >
      {options.map((i) => (
        <Option key={i} value={i}>
          {i}
        </Option>
      ))}
    </Select>
  );
};

export default CustomSelect;
