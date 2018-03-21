
let monday = [
    {
        'name': 'Write a tutorial',
        'duration': 180
    },
    {
        'name': 'Some web development',
        'duration': 180
    }
];

let tuesday = [
    {
        'name': 'Keep writing that tutorial',
        'duration': 120
    },
    {
        'name': 'Some more web development',
        'duration': 180
    },
    {
        'name': 'A whole lot of nothing',
        'duration': 240
    }
];

let tasks = [monday, tuesday];

// Concatenate our 2D array into a single list
var result = tasks.reduce((acc, current) => acc.concat(current))
    // Extract the task duration, and convert minutes to hours
    .map((task) => task.duration / 60)
    // Filter out any task that took less than two hours
    .filter((duration) => duration >= 2)
    // Multiply each tasks' duration by our hourly rate
    .map((duration) => duration * 25)
    // Combine the sums into a single dollar amount
    .reduce((acc, current) => [(+acc) + (+current)])
    // Convert to a "pretty-printed" dollar amount
    .map((amount) => '$' + amount.toFixed(2))
    // Pull out the only element of the array we got from map
    .reduce((formatted_amount) => formatted_amount);

console.log(result);