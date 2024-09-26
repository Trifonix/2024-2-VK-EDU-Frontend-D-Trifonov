import nonUniqueElements from './nonUniqueElements';

test('returns non unique elements', () => {
  expect(nonUniqueElements([1, 2, 3, 1, 3])).toEqual([1, 3, 1, 3]);
  expect(nonUniqueElements([1, 2, 3, 4, 5])).toEqual([]);
  expect(nonUniqueElements([5, 5, 5, 5, 5])).toEqual([5, 5, 5, 5, 5]);
  expect(nonUniqueElements([10, 9, 10, 10, 9, 8])).toEqual([10, 9, 10, 10, 9]);
  expect(nonUniqueElements([])).toEqual([]);
  expect(nonUniqueElements([1])).toEqual([]);
  expect(nonUniqueElements([1, 1])).toEqual([1, 1]);
  expect(nonUniqueElements([1, 2, 3, 4])).toEqual([]);
  expect(nonUniqueElements([1, 1, 2, 2, 3, 3, 4])).toEqual([1, 1, 2, 2, 3, 3]);
  expect(nonUniqueElements([1, 2, 2, 3, 3, 3, 4, 4, 4, 4])).toEqual([2, 2, 3, 3, 3, 4, 4, 4, 4]);
  expect(nonUniqueElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 9, 8, 7, 6, 5])).toEqual([5, 6, 7, 8, 9, 10, 10, 9, 8, 7, 6, 5]);
  expect(nonUniqueElements([1, 1, 1, 2, 7, 3, 4, 4, 4, 4, 5, 5])).toEqual([1, 1, 1, 4, 4, 4, 4, 5, 5]);
});
