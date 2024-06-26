//Console object provides various methods for logging information to the terminal
//It can be used to output diffrent types of messages such as simple, multiple values, information, warning, errors
//Also can be used for measuring time
//It can be used for displaying data in tabular format and grouping related logs together
//Usually used for debugging 
 

// Outputting  a simple message to the terminal
console.log('This is a log message.');

// This output multiple values in a single line
console.log('Multiple values:', 36, true, { name: 'Benjamin' });

// outputting  an informational message
console.info('Heavy snow tomorrow ha ha ha!.');

// This output warning message
console.warn('This is a warning message.');

// This output error message
console.error('This is an error message.');

// This measures time it takes to process 
console.time('processTimer');

// This ends the time after 1 second by  using a setTimeout method
setTimeout(() => {
    console.timeEnd('processTimer');
}, 1000);

//This create and call a function which shows sequence of function calls using console.trace()method
//This will show the fucntion names, file path, and line numbers which can be used to identify issue 
function someFunction() {
    anotherFunction();
}

function anotherFunction() {
    yetAnotherFunction();
}

function yetAnotherFunction() {
    console.trace('Trace:');
}
someFunction();


//This output as a table  
const people = [
    { name: 'Bellew', age: 26 },
    { name: 'Bet', age: 30 },
    { name: 'Bingo', age: 35 }
];
console.table(people);

// This output messages using string 
const name = 'Bellew';
const age = 26;
console.log('Name: %s, Age: %d', name, age);

// This group outputs
console.group('Grouped Logs');
console.log('Log within group');
console.warn('Warning within group');
console.groupEnd();

// This group outputs with labels for identification
console.group('First Group');
console.log('Log within first group');
console.group('Nested Group');
console.log('Log within nested group');
console.groupEnd();
console.groupEnd();
