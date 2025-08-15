const laodash = require('loadash');
const names = ['Himanshu', 'John', 'Jane'];
const capitalized = laodash.map(names, laodash.capitalize);
console.log(capitalized);