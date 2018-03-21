
// Remove duplicate items in array
const uniq = arr => {
  let result = arr.sort().reduce((acc, currentValue) => {
    if (acc.length === 0 || acc[acc.length - 1] !== currentValue) {
      acc.push(currentValue);
    }
    return acc;
  }, []);
  // console.log(result); //[1,2,3,4,5]
}
// console.log('Remove duplicate items in array: ');
uniq([1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4]);
uniq([-2, 20, 0, 4, 20, 0]);

// unique value
let uniq1 =  coll => coll.reduce((acc, value) =>
  (acc.includes(value) ? acc : acc.concat(value)), []);

const un = ([-2, 20, 0, 4, 20, 0]);

console.log(uniq1(un));

// Reduce / reduceRight
const planets = ['Меркурий', 'Венера', 'Земля', 'Марс'];
const closer = planets.reduceRight((acc, planet) => `${acc} ${planet}`, 'всё ближе к Солнцу:'); // 'всё ближе к Солнцу: Марс   Земля Венера Меркурий'
const further = planets.reduce((acc, planet) => `${acc} ${planet}`);

// console.log(further);
// console.log(closer);

const planets1 = 'Mercury,Venus,Earth,Mars';
// console.log(planets1.split(',')); // [ 'Mercury', 'Venus', 'Earth', 'Mars' ]
// console.log(planets1.split(',').join('-')); // 'Mercury-Venus-Earth-Mars'