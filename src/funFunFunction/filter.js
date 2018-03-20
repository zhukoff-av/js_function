
// Filtering out all small values

const isBigEnough = (value) => value >= 10;

const filteredValues = [12, 5, 80, 10, 55].filter(isBigEnough);

console.log(filteredValues);