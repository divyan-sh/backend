/* 

# JSON ARRAYS: 
  + JSON array represents ordered list of values. JSON array can store multiple values. 
  + It can store string, number, boolean or object in JSON array.
  + In JSON array, values must be separated by comma.
  + The [ (square bracket) represents JSON array.

--> JSON Array of Strings: 
    ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] 

--> JSON Array of Numbers:
    [12, 34, 56, 43, 95]    

--> JSON Array of Booleans:
    [true, true, false, false, true]    

--> JSON Array of JSON Objects:
    {   "employees":[    
             {"name":"Ram", "email":"ram@gmail.com", "age":23},    
             {"name":"Shyam", "email":"shyam23@gmail.com", "age":28},  
             {"name":"John", "email":"john@gmail.com", "age":33},    
             {"name":"Bob", "email":"bob32@gmail.com", "age":41}   
        ]
    } 

--> JSON Multidimensional Array: 
    [    
     [ "a", "b", "c" ],   
     [ "m", "n", "o" ],   
     [ "x", "y", "z" ]   
    ]  

--> Looping Through an Array: 
    You can access array values by using a for-in loop:
    for (i in myObj.cars) {
      x += myObj.cars[i];
    }

--> Use the delete keyword to delete items from an array:
    + delete myObj.cars[1];


note: JSON doesn't support comments. It is not a standard.

*/
