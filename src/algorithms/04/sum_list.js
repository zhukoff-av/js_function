// SUM LIST
const sumList = (list) => {
  if (list.length === 0) {
    return 0;
  }
  return list[0] + sumList(list.slice(1));
};

console.log(sumList([1, 2, 3, 4])); // 10
