// create an object

const myTaskForToday = [
    {
    'name': 'first',
    'description': 'it is first task for today',
    'duration': 1,
    'durationType': 'h'
    },
    {
    'name': 'second',
    'description': 'it is second task for today',
    'duration': 2,
    'durationType': 'h'
    },
    {
    'name': 'third',
    'description': 'it is third task for today',
    'duration': 3,
    'durationType': 'm'
    },
    ];
  
    // Map using ES6
  const nameTaskForToday = myTaskForToday.map((task) => task.name);
  
  console.log(nameTaskForToday); // ["first", "second", "third"]