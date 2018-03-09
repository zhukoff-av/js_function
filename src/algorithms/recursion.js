
// FACTORIAL
const factorial = (x) => {
  if (x === 1) {
    return 1;
  }
  return x * factorial(x - 1);
};

// console.log('Factorial 2: ', factorial(2));
// console.log('Factorial 3: ', factorial(3));
// console.log('Factorial 4: ', factorial(4));
// console.log('Factorial 5: ', factorial(5));
// console.log('Factorial 6: ', factorial(6));
// console.log('Factorial 7: ', factorial(7));
// console.log('Factorial 8: ', factorial(8));
// console.log('Factorial 9: ', factorial(9));
// console.log('Factorial 10:', factorial(10));
// console.log('Factorial 11:', factorial(11));


// COUNTDOWN
const countdown = (i) => {
  console.log(i);
  // base case
  if (i <= 0) {
    return null;
  }
  countdown(i - 1);
  return null;
};

// countdown(12);

//GREETING with recursion
const greet2 = name => console.log(`How are you, ${name}?`);

const bye = name => console.log(`Bye, ${name}!`);

const greet = (name) => {
  console.log(`Hello, ${name}!`);
  greet2(name);
  console.log('Getting ready to say bye...');
  bye(name);
};

greet('Steve');
