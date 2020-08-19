//const unsortedArray = [2, 1];
//const unsortedArray = [1]; //[];
//const unsortedArray = [1, 2];
//const unsortedArray = [2, 1, 0];

const unsortedArray = [2, 1, -33, -4, 5, -20, 0, 9];

function insertionSort(inputArray) {
  if (inputArray.length < 2) return inputArray;

  for (let i = 1; i < inputArray.length; i++) {
    const targetValue = inputArray[i];
    for (var j = i - 1; j >= 0 && inputArray[j] > targetValue; j--) {
      inputArray[j + 1] = inputArray[j];
    }
    inputArray[j + 1] = targetValue;
  }
  return inputArray;
}

console.log(insertionSort(unsortedArray.slice()));
