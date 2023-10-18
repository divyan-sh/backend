/* 
In Node every file which we create is known as modules..
But to utilise it as a modules we have to export the functions or the data which u want to use from that module and then,
You have to import that function from that module..

Now to utilise that function in this module u have to require it..
*/

// const add = require("./15.My_Module");
// console.log(`The addition of 10,10 is ${add(10, 10)}`);

// const operator = require("./15.My_Module");

// console.log(operator);
// here we get a object which included your exported function as property.

// console.log(`The addition of 5,6 is ${operator.add(5, 6)}`);
// console.log(`The subtraction of 10,9 is ${operator.sub(10, 9)}`);

//You can also use object destructing to make it more simple..
const { add, sub } = require("./15.My_Module");
console.log(`The addition of 5,6 is ${add(5, 6)}`);
console.log(`The subtraction of 10,9 is ${sub(10, 9)}`);

