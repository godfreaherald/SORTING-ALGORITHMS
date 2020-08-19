//const unsortedArray = [2, 1];
//const unsortedArray = [1]; //[];
//const unsortedArray = [1, 2];
//const unsortedArray = [2, 1, 0];
const unsortedArray = [2, 1, -33, -4, 5, -20, 0, 9];

function bubbleSort(inputArray) {
  if (inputArray.length < 2) return inputArray;
  var swapped;
  do {
    swapped = false;
    for (let i = 0; i < inputArray.length; i++) {
      if (inputArray[i] > inputArray[i + 1]) {
        [inputArray[i], inputArray[i + 1]] = [inputArray[i + 1], inputArray[i]];
        swapped = true;
      }
    }
  } while (swapped);

  return inputArray;
}

console.log(bubbleSort(unsortedArray.slice()));
