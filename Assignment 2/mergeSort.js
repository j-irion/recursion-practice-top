const mergeSort = (array) => {
  if (array.length < 2) return array;
  return merge(
    mergeSort(array.slice(0, array.length / 2)),
    mergeSort(array.slice(array.length / 2, array.length))
  );
};

const merge = (leftArray, rightArray) => {
  let iL = 0;
  let iR = 0;
  let result = [];
  while (iL < leftArray.length && iR < rightArray.length) {
    if (leftArray[iL] < rightArray[iR]) {
      result.push(leftArray[iL]);
      iL++;
    } else {
      result.push(rightArray[iR]);
      iR++;
    }
  }

  while (iL < leftArray.length) {
    result.push(leftArray[iL]);
    iL++;
  }

  while (iR < rightArray.length) {
    result.push(rightArray[iR]);
    iR++;
  }
  return result;
};

console.log(mergeSort([2, 5, 7, 1, 9, 23, 2, 2]));
