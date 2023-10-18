/* 
$ JSON.stringify()
  When sending data to a web server, the data has to be a string.
  ? Convert a JavaScript object into a string with JSON.stringify().
ex-->
Imagine we have this object in JavaScript:
+ var obj = { name: "John", age: 30, city: "New York" };
Use the JavaScript function JSON.stringify() to convert it into a string.
+ var myJSON = JSON.stringify(obj);
--> The result will be a string following the JSON notation.

# Stringify a JavaScript Array:
  It is also possible to stringify JavaScript arrays:
ex->
Imagine we have this array in JavaScript:
+ var arr = [ "John", "Peter", "Sally", "Jane" ];
Use the JavaScript function JSON.stringify() to convert it into a string.
+ var myJSON = JSON.stringify(arr);
--> The result will be a string following the JSON notation.

# Stringify Dates: 
  In JSON, date objects are not allowed. The JSON.stringify() function will convert any dates into strings.
  You can convert the string back into a date object at the receiver.

# Stringify Functions
  In JSON, functions are not allowed as object values.
  ? The JSON.stringify() function will remove any functions from a JavaScript object, both the key and the value:
  + This can be omitted if you convert your functions into strings before running the JSON.stringify() function.
ex-->
var obj = { name: "John", age: function () {return 30;}, city: "New York" };
obj.age = obj.age.toString();
var myJSON = JSON.stringify(obj);

*/
