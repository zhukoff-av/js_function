const book = {};
// an apple costs 67 cents
book.apple = 0.67;
// milk costs $1.49
book.milk = 1.49;
book.avokado = 1.49;

// console.log(book); // { apple: 0.67, milk: 1.49, avocado: 1.49 }

const voted = {};
const checkVoter = (name) => {
  if (voted[name]) {
    console.log('kick them out!');
  } else {
    voted[name] = true;
    console.log('let them vote!');
  }
};

checkVoter('tom'); // let them vote!
checkVoter('mike'); // let them vote!
checkVoter('mike'); // kick them out!