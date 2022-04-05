import { useEffect, useState } from "react";
import CustomTable from "../components/Table";
import {
  MockData,
  columns,
  SortedData,
  rawColumns,
  columnsWithType,
  DynamicString,
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

const Main = () => {
  const [list, setList] = useState<MockData[] | SortedData[]>([]);
  const [originData, setOriginData] = useState<MockData[]>([]);
  const [stateList, setStateList] = useState<string[]>([]);
  const [cityList, setCityList] = useState<string[]>([]);
  const [typeList, setTypeList] = useState<string[]>([]);
  const [condition, setCondition] = useState<DynamicString>({state: '', city: '', type: ''});
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

  const reSort = () => {
    setIsLoading((x) => (x = !x));
    if(originData)  sortData(originData);
  }

  const cState = (title: string) => {
    setCondition((x) => {return {...x, state: title}} )
  };

  const cCity = (title: string) => {
    setCondition((x) => {return {...x, city: title}} )
  };

  const cType = (title: string) => {
    setCondition((x) => {return {...x, type: title}});
  };

  useEffect(() => {
    reSort();
  }, [condition])

  const sortData = (data: MockData[]) => {
    const hasOptions = checkOptions(data, condition);
    let dynamicCol: Column[] =
      hasOptions.length < 1
        ? rawColumns
        : !!condition.type
        ? columnsWithType
        : columns;
    const list2 = processData(data, condition);
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
            defaultValue={condition.state}
            type={"state"}
            changeState={cState}
          />
          <CustomSelect
            options={cityList}
            isLoading={isLoading}
            defaultValue={condition.city}
            type={"city"}
            changeState={cCity}
          />
          <CustomSelect
            options={typeList}
            isLoading={isLoading}
            defaultValue={condition.type}
            type={"type"}
            changeState={ cType}
          />
        </div>
        <CustomTable cols={dynamicType} data={secondList} loading={isLoading} />
      </div>
    </div>
  );
};
export default Main;
