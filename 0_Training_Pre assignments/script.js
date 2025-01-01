// Task 2
const numbers = [10, 20, 30, 40, 50];

const calculateSumAndAverage = (numbers) => {
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  const average = sum / numbers.length;
  return { sum, average };
};

console.log(calculateSumAndAverage(numbers));

// Task 3
const removeDuplicates = (arr) => {
    return [...new Set(arr)]; //  Set ==> ensure uniqueness
  };
  
  const strings = ["apple", "banana", "orange", "apple", "banana"];
  console.log(removeDuplicates(strings));

  
// To run this script:
// 1. Include it in an HTML file and open it in a browser.
// 2. Or run it in the terminal using Node.js: `node script.js`
