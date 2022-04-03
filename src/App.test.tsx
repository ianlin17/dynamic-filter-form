import {processData, mockData, mockFilterOne, mockFilterTwo, testResultOne} from './testFunc';

it('Should display Part 1 data', () => {
  expect(processData(mockData, mockFilterOne)).toEqual(testResultOne);
});

it('Should return empty', () => {
  expect(processData(mockData, mockFilterTwo)).toEqual([]);
});