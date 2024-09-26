/*
 * В этом задании надо разработать функцию
 * `convertBytesToHuman`. Эта функция  должна принимать
 * аргумент `bytes` только числового типа.
 * На выходе функция должна отдать
 * человекопонятную строку, которая будет
 * отражать размер файла. Округление, максимум,
 * до 2 знаков после запятой, исключая нули.
 *  Примеры использования:
 * `convertBytesToHuman(1024) === '1 KB';`
 * `convertBytesToHuman(123123123) === '117.42 MB';`
 * `convertBytesToHuman(1610612736) === '1.5 GB';`
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа).
 * В случае передачи неподходящего аргумента,
 * функция должна вернуть false.
 */

export default function convertBytesToHuman(bytes) {
  if (typeof bytes !== 'number' || bytes < 0 || isNaN(bytes)) {
    return false;
  }
  const sizeUnits = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB'];
  if (bytes === 0) {
    return '0 B';
  }
  const unitIndex = Math.floor(Math.log(bytes) / Math.log(1024));
  const convertedValue = bytes / Math.pow(1024, unitIndex);
  return `${parseFloat(convertedValue.toFixed(2))} ${sizeUnits[unitIndex]}`;
}
