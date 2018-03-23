// Stop words / Map like Set
const stopWord = {
    one: true,
    two: true
};
const words = ['one', 'two', 'ten', 'five'];
const result = words.filter(word => !stopWord[word]);
// console.log(result);

// Set
const stopWords2 = new Set(['one', 'two']);
const result2 = words.filter(word => !stopWords2.has(word));

// console.log(result);

const arr = new Set ([1, 2, 3, 4, 5, 5, 2]);

// unique values
Array.from(arr);  // [ 1, 2, 3, 4, 5 ]

arr.keys();
arr.values();

arr.forEach(value => console.log(value));