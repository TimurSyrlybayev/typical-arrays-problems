exports.min = function min(array) {
  if (array === undefined) {
    return 0;
  }
  let minNumber = 0;
  for (let i = 0; i < array.length; i++) {
    if (minNumber < array[i]) {
      minNumber;
    } else {
      minNumber = array[i];
    }
  }
  return minNumber;
}

exports.max = function max(array) {
  if (array === undefined) {
    return 0;
  }
  let maxNumber = 0;
  for (let i = 0; i < array.length; i++) {
    if (maxNumber > array[i]) {
      maxNumber;
    } else {
      maxNumber = array[i];
    }
  }
  return maxNumber;
}

exports.avg = function avg(array) {
  if (array === undefined || array.length === 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
}
