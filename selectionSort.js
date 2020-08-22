//const unsortedArray = [2, 1];
//const unsortedArray = [1]; //[];
//const unsortedArray = [1, 2];
//const unsortedArray = [2, 1, 0];

const unsortedArray = [2, 1, -33, -4, 5, -20, 0, 9];

function selectionSort(inputArray) {
  if (inputArray.length < 2) return inputArray;
  const n = inputArray.length;
  for (let i = 0; i < n - 1; i++) {
    let min = i;

    let j = i + 1;
    while (j < n) {
      if (inputArray[j] < inputArray[min]) {
        min = j;
      }
      j++;
    }

    [inputArray[i], inputArray[min]] = [inputArray[min], inputArray[i]];
  }
  return inputArray;
}

console.log(selectionSort(unsortedArray.slice()));
