var name = require('./script')
var oneLinerJoke = require('one-liner-joke');
var figlet = require("figlet");
figlet("Hello Bhuvie!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
var getRandomJoke = oneLinerJoke.getRandomJoke({
  'exclude_tags': ['dirty', 'racist', 'marriage']
});
console.log(getRandomJoke.body)

for(var key2 in name){
  console.log(name[key2])
}


console.log("hii how RE YOU");
// var obj ={
//     name: "hello",
//     lastName: "how"
// }
// for (const key1 in obj) {
// console.log(obj[key1])
// }