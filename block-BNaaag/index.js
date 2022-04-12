// 1. require fs in a file(`index.js`) and use fs.readFile to read content of a file(content.md)

var fs = require('fs');

fs.readFile('./content.md', (err, content) => {
    console.log(err, content);
    console.log(content.toString());
});

// - create file whenever required on your own 
// index.js
// fs.readFile('./content.md'// filepath, (err, file) => {
//   // handle error or content of the file
// })


// 2. Run sync code from fs module in the above file(`index.js`).

var result = fs.readFileSync('./content.md', 'utf8');
console.log(result);

// 3. Run async code from fs module in same file.

fs.readFile('./content.md', (err, content) => {
    console.log(err, content);
    console.log(content.toString());
});
// 4. create new buffer of fixed length 10 and store it in variable named buff1 and console the buff1.

let buff1 = Buffer.alloc(10);


// 5. write content(Welcome to Buffer) to buff1 variable.

buff1.write('Welcome to Buffer');

console.log(buff1);