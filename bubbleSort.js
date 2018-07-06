function bubbleSort(arr) {
  let swap = 1;
  while (swap > 0) {
    swap = 0;
    for (let i = 0; i < arr.length - 1; i++) {
      let temp;
      if (arr[i] > arr[i + 1]) {
        swap++;
        temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
}

module.exports = bubbleSort;
