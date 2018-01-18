
const fizzBuzz = (begin, end) => {
    if (end > begin) {
        for (let i = begin; i <= end; i++ ) {
            if ((i % 3 == 0) & (i % 5 == 0)) {
                console.log('FizzBuzz');
            } else if (i % 3 == 0 ) {
                console.log('Fizz');
            } else if (i % 5 == 0) {
                console.log('Buzz');
            }  else
                console.log(i);
        }
    }
};

//fizzBuzz(11,20);

// BEGIN (write your solution here) (write your solution here)
const diff = (a,b) => {
  const s = 360;
  const delta = Math.abs(a - b);

  if (delta > 180) {
    return s - delta;
  } else if (a > b & delta < 180) {
    return a - b;
  } else if (a < b & delta < 180) {
    return b - a;
  }
};
// END
export default diff;
diff(5, 190);
