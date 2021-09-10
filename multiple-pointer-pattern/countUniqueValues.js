const countUniqueValues = (sortedArray) => {
  const leftHash = {};
  const rightHash = {};

  let leftPointer = 0;
  let rightPointer = sortedArray.length - 1;

  while (leftPointer < rightPointer) {
    const leftValue = sortedArray[leftPointer++];
    const rightValue = sortedArray[rightPointer--];

    if (
      rightHash.hasOwnProperty(leftValue) ||
      leftHash.hasOwnProperty(rightValue)
    )
      break;

    if (!leftHash.hasOwnProperty(leftValue)) leftHash[leftValue] = true;
    if (!rightHash.hasOwnProperty(rightValue)) rightHash[rightValue] = true;
  }
  return Object.keys(leftHash).length + Object.keys(rightHash).length;
};

// const result =
// countUniqueValues([1, 1, 1, 1, 1, 2]); // 2
// countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); // 7
// countUniqueValues([]); // 0
// countUniqueValues([-2, -1, -1, 0, 1]); // 4
// console.log(result);
