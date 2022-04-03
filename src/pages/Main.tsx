import { useEffect, useState } from "react";
import CustomTable from "../components/Table";
import {
  MockData,
  columns,
  SortedData,
  rawColumns,
  columnsWithType,
  FilterOption,
  Column,
} from "../model/models";
import {
  getStateSelections,
  getCitySelections,
  getTypeSelections,
  processData,
  checkOptions,
} from "../utils/util";
import CustomSelect from "../components/Select";
const defaultState: FilterOption = { state: "", city: "", type: "" };
const Main = () => {
  const [list, setList] = useState<MockData[] | SortedData[]>([]);
  const [originData, setOriginData] = useState<MockData[]>([]);
  const [stateList, setStateList] = useState<string[]>([]);
  const [cityList, setCityList] = useState<string[]>([]);
  const [typeList, setTypeList] = useState<string[]>([]);
  const [state, setState] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [secondList, setSecondList] = useState<MockData[] | SortedData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [dynamicType, setDynamicType] = useState<Column[]>([]);
  useEffect(() => {
    fetch("/api/properties")
      .then((response) => response.json())
      .then((json) => {
        const data = JSON.parse(JSON.stringify(json.data));
        const temp = processData(data, {
          state: "Georgia",
          city: "",
          type: "",
        });
        const stateList = getStateSelections(data);
        const cityList = getCitySelections(data);
        const typeList = getTypeSelections(data);
        setOriginData(data);
        sortData(data);
        setList(temp);
        setStateList(stateList);
        setCityList(cityList);
        setTypeList(typeList);
      });
  }, []);

  const toSort = () => {
    const data = JSON.parse(JSON.stringify(originData));
    sortData(data);
  };

  const reSort = () => {
    setIsLoading((x) => (x = !x));
    toSort();
  }

  const cState = (title: string) => {
    defaultState.state = title;
    setState(title);
    reSort()
  };

  const cCity = (title: string) => {
    defaultState.city = title;
    setCity(title);
    reSort();
  };

  const cType = (title: string) => {
    defaultState.type = title;
    setType(title);
    reSort();
  };

  const sortData = async (data: MockData[]) => {
    const hasOptions = await checkOptions(data, defaultState);
    let dynamicCol =
      (await hasOptions.length) < 1
        ? rawColumns
        : !!defaultState.type
        ? columnsWithType
        : columns;
    const list2 = processData(data, defaultState);
    setSecondList(list2);
    setDynamicType(dynamicCol);
    setIsLoading((x) => (x = !x));
  };

  return (
    <div className="flex justify-evenly pt-10 flex-row">
      <div className="text-center pt-4">
        <p className="mb-12">Part 1: Static Group up Georgia state</p>
        <CustomTable cols={columns} data={list} loading={isLoading} />
      </div>
      <div className="pt-4 text-center">
        <p>Part 2: Dynamic fields to group by</p>
        <div className="flex justify-evenly">
          <CustomSelect
            options={stateList}
            isLoading={isLoading}
            defaultValue={state}
            type={"state"}
            changeState={(title) => cState(title)}
          />
          <CustomSelect
            options={cityList}
            isLoading={isLoading}
            defaultValue={city}
            type={"city"}
            changeState={(title) => cCity(title)}
          />
          <CustomSelect
            options={typeList}
            isLoading={isLoading}
            defaultValue={type}
            type={"type"}
            changeState={(title) => cType(title)}
          />
        </div>
        <CustomTable cols={dynamicType} data={secondList} loading={isLoading} />
      </div>
    </div>
  );
};
export default Main;
