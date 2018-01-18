
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
