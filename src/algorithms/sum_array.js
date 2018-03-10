// SUM ARRAY
const sumArray = (arr) => {
  let total = 0;
  for (let x = 0; x < arr.length; x += 1) {
    total += arr[x];
  }
  return total;
};

console.log(sumArray([1, 2, 3, 4])); // 10

const sumList = (list) => {
  if (list.length === 0) {
    return 0;
  }
  return list[0] + sumList(list.slice(1));
};

console.log(sumList([1, 2, 3, 4])); // 10
