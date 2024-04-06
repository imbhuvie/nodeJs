const student=require('./scriptExport');
var figlet = require("figlet");

figlet("Hello Bhuvie!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
 console.log(student);
 //When we export an object
//  for (const key in student) {
//     console.log(student[key])
//  }

//When we export an array
student.forEach(element => {
    console.log(element)
});