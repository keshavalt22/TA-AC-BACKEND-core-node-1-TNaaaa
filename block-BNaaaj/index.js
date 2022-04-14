// writeCode

// Q. Write code to run `index.js` with content console.log('Welcome to Nodejs') in node environment ?

console.log('Welcome to node.js');

// Q. In above `index.js` file
// - require os module

const os = require('os');

// - write code to get `number of cpu's, free memory, uptime and version from os module`

let numOfCPU = os.cpus().length; 
let freeMemory = os.freemem();
let upTime =  os.uptime();
let version = os.version();

console.log(numOfCPU, freeMemory, upTime, version);

// - write code to require only readFile and unlink method from fs module.

const {readFile, unlink, readFileSync} = require('fs');



// Q. Create 2 files
//   1. area.js
//   2. app.js
//   3. In area.js write functions to calculate area of square, rectangle and circle and export them using module.exports
//   4. In app.js, require functions from area.js and execute the areas of given figures and console.log the results.

// Q. Write 2 different methods for creating buffer in nodejs using Buffer class.
// - create a fixed length buffer of 12.

let buff1 = Buffer.alloc(12);
let buff2 = Buffer.allocUnsafe(12);
// - write code to convert buffer back to string.

buff1.toString();
buff2.toString();

// Q. Write code example to demonstrate blocking and non-blocking code.

// blocking code

var sync = readFileSync('./app.js');

// non-blocking code

readFile('./app.js', (err,content) => {
    console.log(err, content.toString());
})

// #### http protocol

// Q. In server.js
// 1. require parse method from url core node module.



// 2. parse `https://airindia.com/fares/calculate?from=delhi&to=detroit`and store parsed value in varaible named parsedUrl.



// 3. console query string from parsed url



// 4. console pathname



// 5. console protocol



// 6. use parse method from url module to parse query string as well.