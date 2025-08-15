// module.exports 
// require
const firstModule = require('./first-module');
console.log(firstModule.add(5, 3));
console.log(firstModule.subtract(5, 3));
console.log(firstModule.divide(5, 0));

try{
  console.log("trying to divide by 0");
  console.log(firstModule.divide(5, 0));
}catch(error){
  console.error(error.message);
}


// module wrapper
(
  function(require, module, exports, __dirname, __filename) {
    // Your code here
  }
)
