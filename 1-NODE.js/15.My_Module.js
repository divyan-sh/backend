/* 
Now to make this file as module we have to make the functions of this file as public functions so that i can use this functions in another module.

By Default if we create a function like this..
const add = (a,b)=>{
    console.log(a+b);
}
Then it is a private function and we can only use this in this module.

to make this public we have to export it..
*/

const add = (a, b) => {
  return a + b;
};

/*
Now what if I want to export more than one function..
You can't do like this-->

module.exports=add;
module.exports=sub;

+ This will not work what you have to do is assign each function in a separate property and then when importing in other module instead of getting a single function you will get a object of the property which you named when exporting..

*/

const sub = (a, b) => {
  return a - b;
};

// module.exports.add = add;
// module.exports.sub = sub;

//Now if i create one more func. for multiplication then again i have to export it using module.exports.multi= multi
//+isn't too long then we can also directly send them as a object simply like this..

const multi = (a, b) => {
  return a * b;
};

module.exports = { add, sub, multi };

/* 
*Extra-->
difference between parameter and arguments-->

parameters and the variables which we use in parenthesis while define a function.

And arguments are variables which we passed to function while calling it.

*/
