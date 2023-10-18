/* 

# JSON vs XML
  Both JSON and XML can be used to receive data from a web server.
  > JSON Example
    {"employees":[
      { "firstName":"John", "lastName":"Doe" },
      { "firstName":"Anna", "lastName":"Smith" },
      { "firstName":"Peter", "lastName":"Jones" }
    ]}

  > XML Example
    <employees>
      <employee>
        <firstName>John</firstName> <lastName>Doe</lastName>
      </employee>
      <employee>
        <firstName>Anna</firstName> <lastName>Smith</lastName>
      </employee>
      <employee>
        <firstName>Peter</firstName> <lastName>Jones</lastName>
      </employee>
    </employees>

  > JSON is Like XML Because: 
    Both JSON and XML are "self describing" (human readable)
    Both JSON and XML are hierarchical (values within values)
    Both JSON and XML can be parsed and used by lots of programming languages
    Both JSON and XML can be fetched with an XMLHttpRequest

  > JSON is Unlike XML Because: 
    JSON doesn't use end tag
    JSON is shorter
    JSON is quicker to read and write
    JSON can use arrays
    The biggest difference is XML has to be parsed with an XML parser. JSON can be parsed by a standard JavaScript function.


*/
