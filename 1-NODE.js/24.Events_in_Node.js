/* 
$ Events Module...

Event Driven Programming: 
--> Node.js uses event driven programming. It means as soon as Node starts its server, it simply initiates its variables, declares functions and then simply waits for event to occur. It is the one of the reason why Node.js is pretty fast compared to other similar technologies.

--> There is a main loop in the event driven application that listens for events, and then triggers a callback function when one of those events is detected.

$ Difference between Events and Callbacks:
--> Although, Events and Callbacks look similar but the differences lies in the fact that callback functions are called when an asynchronous function returns its result where as event handling works on the observer pattern. Whenever an event gets fired, its listener function starts executing. Node.js has multiple in-built events available through events module and EventEmitter class which is used to bind events and event listeners.

>>  Node.js allows us to create and handle custom events easily by using events module. Event module includes EventEmitter class which can be used to raise and handle custom events.

>>  Typically in Node.js, when we want to have an action occur upon completion of another action, we use asynchronous programming techniques like nesting callbacks or chaining promises. 

>> However, these techniques tightly couple the triggering action and the resulting action, making it difficult to modify the resulting action in the future. 

>> Event emitters provide a different way to structure this relationship: the publish-subscribe pattern. In this software architecture pattern, a publisher (the event emitter) sends a message (an event), and a subscriber receives the event and performs an action. 

>> The power of this pattern is that the publisher does not need to know about the subscribers. A publisher publishes a message, and it’s up to the subscribers to react to it in their respective ways. If we wanted to change the behavior of our application, we could adjust how the subscribers react to the events without having to change the publisher.

$ Events Module..  where you can create-, fire-, and listen for- your own events.
custom events mean anything for ex i make
sayMyName event
connectionStart event
+ To bind event and event listeners we will use a class named EventEmitter.

--1: Import events module
--2: Create class variable EventEmitter.
--3: Now all event properties and methods are an instance of an EventEmitter object. To be able to access these properties and methods, create an EventEmitter object:
// Import events module  
var events = require('events');  
// Create an eventEmitter object  
var eventEmitter = new events.EventEmitter();  

--4: To bind event handler with an event:
// Bind event and even handler as follows  
eventEmitter.on('eventName', eventHandler);  

--5: To fire an event: 
// Fire an event   
eventEmitter.emit('eventName');  
*  the emit() function returns true if there are listeners for the event. If there are no listeners for an event, it returns false.
*/

//?Import events module.
const events = require("events");

//?Create an eventEmitter object.
const eventEmitter = new events.EventEmitter();

//?Bind event and even handler as follows
//+ Now let's use define some custom events:
eventEmitter.on("sayMyName", () => {
  console.log(`Hey I am Divyansh Thakur`);
});

//note: Beauty of Node.js now we can just fire multiple events handler on single event.. like this-->
eventEmitter.on("sayMyName", () => {
  console.log(`Hey its cnu IG handle @c.l.o.v.e.s`);
});

//+ You can also use addListener() methods to subscribe for an event as shown below.
eventEmitter.addListener("sayMyName", () => {
  console.log(`Hey its shraddha IG handle @c.l.o.v.e.s_2`);
});

//? Fire an event..
eventEmitter.emit("sayMyName");

/* 
*we cannot fire an event before binding that event with event listeners,
becoz here we are creating custom events not predefined events so in this case we have to first tell what to do when event with this name is fired..
*/

//-- Passing arguments in event handlers...

eventEmitter.on("checkPage", (sc, msg) => {
  console.log(`Status code is ${sc} and the page is ${msg}`);
});

eventEmitter.emit("checkPage", 200, "OK");
