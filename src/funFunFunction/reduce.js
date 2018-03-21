
const arr = [1, 2, 3, 4, 5];

let arr1 = arr.reduce(function(previous, current, index) {
    let val = previous + current;
    console.log("The previous value is " + previous + 
                "; the current value is " + current +
                ", and the current iteration is " + (index + 1));
    return val;
}, 0);

// console.log(arr1);

const tasks = [
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

// Map 
let tasksDuration = tasks.map((task) => task.duration);
 
// Reduce
let total_time = tasksDuration.reduce((previous, current) => previous + current );

console.log('Total duration: ' + total_time);