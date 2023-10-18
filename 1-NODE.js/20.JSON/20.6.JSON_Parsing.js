/* 

# PARSING JSON: 
  A common use of JSON is to exchange data to/from a web server.
  When receiving data from a web server, the data is always a string.
  ? Parse the data with JSON.parse(), and the data becomes a JavaScript object.
For ex->
Imagine we received this text from a web server:
+ '{ "name":"John", "age":30, "city":"New York"}'
Use the JavaScript function JSON.parse() to convert text into a JavaScript object:
+ var obj = JSON.parse('{ "name":"John", "age":30, "city":"New York"}');

# JSON From the Server:
  You can request JSON from the server by using an AJAX request
  ? As long as the response from the server is written in JSON format, you can parse the string into a JavaScript object.
Example-->
> json_demo.txt: 
{
    "name":"John",
    "age":31,
    "pets":[
        { "animal":"dog", "name":"Fido" },
        { "animal":"cat", "name":"Felix" },
        { "animal":"hamster", "name":"Lightning" }
    ]
}
> index.js
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    document.getElementById("demo").innerHTML = myObj.name;
  }
};
xmlhttp.open("GET", "json_demo.txt", true);
xmlhttp.send();

--> When using the JSON.parse() on a JSON derived from an array, the method will return a JavaScript array, instead of a JavaScript object.

# Parsing Dates: Date objects are not allowed in JSON.
  If you need to include a date, write it as a string.
  You can convert it back into a date object later:
ex-->
var text = '{ "name":"John", "birth":"1986-12-14", "city":"New York"}';
var obj = JSON.parse(text);
obj.birth = new Date(obj.birth);

document.getElementById("demo").innerHTML = obj.name + ", " + obj.birth;

$ Or, you can use the second parameter, of the JSON.parse() function, called reviver.The reviver parameter is a function that checks each property, before returning the value.
ex-->
var text = '{ "name":"John", "birth":"1986-12-14", "city":"New York"}';
var obj = JSON.parse(text, function (key, value) {
  if (key == "birth") {
    return new Date(value);
  } else {
    return value;
  }
});

document.getElementById("demo").innerHTML = obj.name + ", " + obj.birth;

# Parsing Functions: Functions are not allowed in JSON.
  If you need to include a function, write it as a string.
  You can convert it back into a function later:
ex-->
var text = '{ "name":"John", "age":"function () {return 30;}", "city":"New York"}';
var obj = JSON.parse(text);
obj.age = eval("(" + obj.age + ")");

document.getElementById("demo").innerHTML = obj.name + ", " + obj.age();

note:You should avoid using functions in JSON, the functions will lose their scope, and you would have to use eval() to convert them back into functions.
*/
