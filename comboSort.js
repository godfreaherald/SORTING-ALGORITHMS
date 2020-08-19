//const unsortedArray = [2, 1];
//const unsortedArray = [1]; //[];
//const unsortedArray = [1, 2];
//const unsortedArray = [2, 1, 0];
//const shrink_factor =1.3;
const unsortedArray = [2, 1, -33, -4, 5, -20, 0, 9];

function comboSort(inputArray) {
  if (inputArray.length < 2) return inputArray;
  let swapped;
  let gap = inputArray.length;
  do {
    gap = gap > 1 ? Math.floor(gap / 1.3) : 1;
    swapped = false;

    for (let i = 0; i + gap < inputArray.length; i++) {
      if (inputArray[i] > inputArray[i + gap]) {
        [inputArray[i], inputArray[i + gap]] = [
          inputArray[i + gap],
          inputArray[i],
        ];
        swapped = true;
      }
    }
  } while (swapped || gap > 1);

  return inputArray;
}

console.log(comboSort(unsortedArray.slice()));
