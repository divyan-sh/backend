/* 

? JSON Object: 
  var person1 = {
      "firstName": "John",
      "lastName": "Doe",
      "age": 23,
      "married": true,
    }

? JS Object: 
  var person2 = {
      firstName: "John",
      lastName: "Doe",
      age: 23,
      married: true,
  }

> Access JSON Object properties like this..
  + console.log(person1.firstName);

  It can also be accessed like this:
  + console.log(person1["firstName"]);
  
  Data can be modified like this:
  + person1.firstName = "Gilbert";

  It can also be modified like this:
  + person1["firstName"] = "Gilbert";

--> JSON Nested Object Example: 
    {  
        "firstName": "Sonoo",   
        "lastName": "Jaiswal",   
        "age": 27,  
        "address" : {  
            "streetAddress": "Plot-6, Mohan Nagar",  
            "city": "Ghaziabad",  
            "state": "UP",  
            "postalCode": "201007"  
        }  
    }  

--> Looping an Object: 
    You can loop through object properties by using the for-in loop:
    myObj = { "name":"John", "age":30, "car":null };
    for (x in myObj) {
        document.getElementById("demo").innerHTML += x;
     }

--> Use the delete keyword to delete properties from a JSON object:
    + delete myObj.cars.car2;

--> The file type for JSON files is ".json"

--> The MIME type for JSON text is "application/json" (used in content-type of http headers)
*/
