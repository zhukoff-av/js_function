
// Spread
let parts = ['first', 'second'];
let lyrics = ['zero', ...parts, 'and', 'third'];
// ["голова", "плечи", "колени", "и", "пальцы"]
// console.log(lyrics); // ["zero", "first", "second", "and", "third"]

let arr = [1, 2, 3];
let arr2 = [...arr]; // like arr.slice()
arr2.push(4); 

// console.log(arr2); // [1, 2, 3, 4]

let arr3 = [0, 1, 2];
let arr4 = [3, 4, 5];
arr5 = [...arr3, ...arr4];

// console.log(arr5); //[0, 1, 2, 3, 4, 5]


// __Rest__
let log = function(a, b, ...rest) {
    console.log(a, b, rest);
  };
  
  log('Basic', 'rest', 'operator', 'usage') //["operator", "usage"]