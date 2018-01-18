
// Power of Three
const isPowerOfThree = (num) => {
  let current = 1;
  while (current <= num) {
    if (current === num) {
      return true;
    }
    current *= 3;
  }

  return false;
};

export default isPowerOfThree;

// Sum of squares
const sumOfSquares = (n) => {
  let sum = 0;
  let i = 1;
  while (i <= n) {
    sum += i * i;
    i += 1;
  }

  return sum;
};

// Square of sum
const squareOfSum = (n) => {
  let sum = 0;
  let i = 1;
  while (i <= n) {
    sum += i;
    i += 1;
  }

  return sum * sum;
};

export const sumSquareDifference = n =>
  squareOfSum(n) - sumOfSquares(n);

// Diff angle
export const diff = (a, b) => {
  const angle = Math.abs(a - b);
  const difference = angle > 180 ? 360 - angle : angle;
  return difference;
};
