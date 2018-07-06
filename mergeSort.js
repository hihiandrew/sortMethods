function mergeSort(arr) {
  let result = [];
  if (arr.length < 2) {
    return arr;
  } else {
    let mid = Math.round(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    let i = (j = 0);
    while (i < left.length || j < right.length) {
      if (left[i] < right[j] || !right[j]) {
        result.push(left[i]);
        i++;
      } else if (left[i] > right[j] || !left[i]) {
        result.push(right[j]);
        j++;
      }
    }
    return result;
  }
}

module.exports = mergeSort;
