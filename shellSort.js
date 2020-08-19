//const unsortedArray = [2, 1];
//const unsortedArray = [1]; //[];
//const unsortedArray = [1, 2];
//const unsortedArray = [2, 1, 0];

const unsortedArray = [2, 1, -33, -4, 5, -20, 0, 9];

function shellSort(inputArray) {
  if (inputArray.length < 2) return inputArray;
  //let gap = 1;
  const gaps = [1, 8, 23, 77, 281];
  for (let g = 0; g < gaps.length; g++) {
    let gap = gaps[g];
    for (let i = gap; i < inputArray.length; i++) {
      const targetValue = inputArray[i];
      for (var j = i; j >= gap && inputArray[j - gap] > targetValue; j -= gap) {
        inputArray[j] = inputArray[j - gap];
      }
      inputArray[j] = targetValue;
    }
  }

  return inputArray;
}

console.log(shellSort(unsortedArray.slice()));
