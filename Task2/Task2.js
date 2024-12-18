const sumTowLargestNumbers = (numbers) => {
  const arrUniqueValue = [...new Set(numbers)];
  if (arrUniqueValue.length < 2) {
    return console.log("Mảng phải có ít nhất 2 phần tử");
  }
  let largest = -Infinity;
  let secondLargest = -Infinity;
  for (let number of arrUniqueValue) {
    if (number >= largest) {
      secondLargest = largest;
      largest = number;
    } else if (number > secondLargest) {
      secondLargest = number;
    }
  }

  return Number(largest) + Number(secondLargest);
};

const testCase = () => {
  console.log(sumTowLargestNumbers([5, 1, 2, 4, 3]));
  console.log(sumTowLargestNumbers([5, 1,5]));
  console.log(sumTowLargestNumbers([]));
  
};

testCase();
