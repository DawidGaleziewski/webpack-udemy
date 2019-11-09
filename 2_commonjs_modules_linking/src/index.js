// index.js will depend on sum.js

// Uses relative path!
const sum = require('./sum');
const total = sum(10, 5);
console.log(total);
