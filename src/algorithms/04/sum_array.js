// SUM ARRAY
const sumArray = (arr) => {
  let total = 0;
  for (let x = 0; x < arr.length; x += 1) {
    total += arr[x];
  }
  return total;
};

console.log(sumArray([1, 2, 3, 4])); // 10
