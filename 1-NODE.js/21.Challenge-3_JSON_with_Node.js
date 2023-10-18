/* 
#Challenge-3(JSON_NODE_Integration) 
+1: convert to JS Object into JSON
+2: Store that json data into another file using fs module.
+3: Read that json file..
+4: Agin convert the JSON object back into js object.
+5: Display JS Object.
*/
const fs = require("fs");

const Employees = [
  {
    name: "Divyansh Thakur",
    role: "jr. Web DeveLoper",
    salary: "$10,000",
    id: "e2609",
  },
  {
    name: "Punit Solanki",
    role: "Django DeveLoper",
    salary: "$15,000",
    id: "e0507",
  },
  {
    name: "Kishan Abhishek",
    role: "Sr. Android DeveLoper",
    salary: "$20,000",
    id: "sk27",
  },
];

const Employees_JSON = JSON.stringify(Employees, null, 4);
// JSON data will get store in beautify format..

fs.writeFile("./EmployeesData.json", Employees_JSON, (err) => {
  if (err) {
    console.log(`OOPS ERROR: ${err.message}`);
  } else {
    console.log(
      `Data Successfully stored in a JSON file.. located at ${__dirname}`
    );
  }
});

fs.readFile("./EmployeesData.json", "utf-8", (err, data) => {
  if (err) {
    console.log(`OOPS ERROR: ${err.message}`);
  } else {
    const originalData = JSON.parse(data);
    console.log("JSON DATA-->");
    console.log(data);
    console.log("ORIGINAL DATA-->");
    console.log(originalData);
  }
});
