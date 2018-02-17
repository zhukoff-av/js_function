
// Remove duplicate items in array
const uniq = arr => {
  let result = arr.sort().reduce((acc, currentValue) => {
    if (acc.length === 0 || acc[acc.length - 1] !== currentValue) {
      acc.push(currentValue);
    }
    return acc;
  }, []);
  console.log(result); //[1,2,3,4,5]
}

//uniq([1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4]);
uniq([-2, 20, 0, 4, 20, 0]);
