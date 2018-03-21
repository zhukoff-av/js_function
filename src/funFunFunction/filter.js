
// Filtering out all small values
const isBigEnough = value => value >= 10;

const filteredValues = [12, 5, 80, 10, 55].filter(isBigEnough);

console.log(filteredValues);


// Filtering invalid entries from JSON
const arr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    { },
    { id: null },
    { id: NaN },
    { id: 'undefined' }
  ];

  let invalidEnties = 0;

  const isNumber = obj => obj != undefined && typeof(obj) === 'number' && !isNaN(obj);

  const filterById = item => {
      if (isNumber(item.id) && item.id !== 0) {
          return true;
      }
      invalidEnties++;
      return false;
  };

  const arrById = arr.filter(filterById);

//   console.log('Filtered array', arrById);

//   console.log('Number of invalid entries = ', invalidEnties);

//   Searching in array

  const city = ['New York', 'Berlin', 'Frankfurt', 'Stockholm', ''];

/**
 * Array filters items based on search criteria (query)
 */
const filterItems = (query) => {
  return fruits.filter((el) =>
    el.toLowerCase().indexOf(query.toLowerCase()) > -1
  );
}

console.log(filterItems('t')); // ["Frankfurt", "Stockholm"]