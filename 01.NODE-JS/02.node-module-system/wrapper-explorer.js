console.log('node module wrapper bin');
console.log('__filename in wrapper explorer',__filename);
console.log('__dirname in wrapper explorer',__dirname);

module.exports.greet = function(name){
  console.log(`hello sir ${name}`);
}