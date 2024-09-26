/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== '1 B',
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === '5 B'
 */

import convertBytesToHuman from './convertBytesToHuman';

test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(0)).toBe('0 B');
  expect(convertBytesToHuman(5)).toBe('5 B');
  expect(convertBytesToHuman(1024)).toBe('1 KB');
  expect(convertBytesToHuman(123123123)).toBe('117.42 MB');
  expect(convertBytesToHuman(1610612736)).toBe('1.5 GB');
});

test('Возвращает корректное значение для предельных значений', () => {
  expect(convertBytesToHuman(1)).toBe('1 B');
  expect(convertBytesToHuman(1023)).toBe('1023 B');
  expect(convertBytesToHuman(1048576)).toBe('1 MB');
  expect(convertBytesToHuman(1099511627776)).toBe('1 TB');
});

test('Округляет значение до двух знаков после запятой', () => {
  expect(convertBytesToHuman(123456789)).toBe('117.74 MB');
  expect(convertBytesToHuman(9876543210)).toBe('9.2 GB');
  expect(convertBytesToHuman(1234567890123456)).toBe('1.1 PB');
});

test('Работает для больших чисел', () => {
  expect(convertBytesToHuman(1125899906842624)).toBe('1 PB');
  expect(convertBytesToHuman(1152921504606846976)).toBe('1 EB');
});

test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman(-1)).toBe(false);
  expect(convertBytesToHuman('string')).toBe(false);
  expect(convertBytesToHuman(null)).toBe(false);
  expect(convertBytesToHuman(undefined)).toBe(false);
  expect(convertBytesToHuman(NaN)).toBe(false);
});
