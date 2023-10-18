/* 
$ Using Event Emitters in Node.j: 

--> Emitting Events: 
we’ll explore the two most common ways to create an event emitter in Node.js

>> 1.The first is to use an event emitter object directly. (Which we already study)
   const {EventEmitter} =require(''events');
   const emitter = new EventEmitter();

>> 2. The second is to create an object that extends the event emitter object. (Which we will see now)
Let’s work toward seeing a more complete example of publishing, listening to, and acting upon events. We’ll do this by creating a ticket manager example application. The ticket manager will expose a function to buy tickets. When a ticket is bought, an event will be sent with details of the purchaser.
*/

//# Let’s begin by creating our ticket manager. It will extend the EventEmitter class so that we don’t have to create a separate event emitter object to emit events.

const EventEmitter = require("events");

class TicketManager extends EventEmitter {
  //+ In our ticket manager, we want to provide the initial supply of tickets that can be purchased. We’ll do this by accepting the initial supply in our constructor(), a special function that’s called when a new object of a class is made.
  constructor(supply) {
    //Even though we declared that TicketManager is a child class of EventEmitter, we still need to call super() to get access to the methods and properties of EventEmitter. The super() function calls the constructor of the parent function, which in this case is EventEmitter.
    super();
    this.supply = supply;
  }

  //+ Now, let’s add a buy() method that will be called when a ticket is purchased. This method will decrease the supply by one and emit an event with the purchase data.

  buy(email, price) {
    this.supply--;
    // here we emit a event so when this buy function is called a event is emit by the EventEmitter object with all the data like email,price,timestamp.
    this.emit("buy", email, price, Date.now());
  }
}

// As Now we created our main logic now what do we just have to make functions that listen to the events which is fire when any object of the ticket manager class will call buy function.

const ticketManager = new TicketManager(10);

// As we extend the EventEmitter class with the TicketManager class so the object of ticket manager will have all the access of methods of EventEmitter class--> So we will create a object of TicketManager class and then using that object define a listener that will execute when buy event fire..

ticketManager.on("buy", (email, price, date) => {
  console.log(`one Ticket is Booked of ₹${price}`);
});

// Now that we set up a listener, let’s use the buy() function so that the event will be emitted. At the end of your file add this:
ticketManager.buy("test@email.com", 220);
ticketManager.buy("heycnu@Gmail.com", 220);

// Since the buy() function was called twice, two buy events were emitted. Our listener picked up both.
//+ Sometimes we’re only interested in listening to the first time an event was fired, as opposed to all the times it’s emitted. Node.js provides an alternative to on() for this case with the once() function.
//+ Under the hood, when the event is emitted and received by a listener that uses once(), Node.js automatically removes the listener and then executes the code in the callback function.

ticketManager.once("buy", () => {
  console.log("This is only called once");
});

ticketManager.buy("test@email.com", 20);
ticketManager.buy("test@email.com", 20);

/* 
--> The first two lines were from the first two buy() calls before the once() listener was added. Adding a new event listener does not remove previous ones, so the first event listener we added is still active and logs messages.

Since the event listener with on() was declared before the event listener with once(), we see Someone bought a ticket! before This is only called once. These two lines are both responding to the second-to-last buy event.

Finally, when the last call to buy() was made, the event emitter only had the first listener that was created with on(). As mentioned earlier, when an event listener created with once() receives an event, it is automatically removed.

Now that we have added event listeners to detect our emitters, we will see how to capture data with those listeners.

*/

//# So far, you’ve set up event listeners to react to emitted events. The emitted events also pass along data. Let’s see how we can capture the data that accompanies an event.

//>> an email service and a database service. They’ll be used to simulate sending an email and saving to a database respectively.

class EmailService {
  send(emailId) {
    console.log(`Sending Email to ${emailId}`);
  }
}

//>> The database service saves our purchase data to a database via its save() method.

class DatabaseService {
  save(email, price, timeStamp) {
    console.log(
      `Running query: INSERT INTO orders VALUES (email, price, created) VALUES (${email}, ${price}, ${timeStamp})`
    );
  }
}

//Now let's create Objects of these classes..

const ticketManger1 = new TicketManager(3);
const emailService = new EmailService();
const databaseService = new DatabaseService();

//Now let's edit our listeners function..

ticketManger1.on("buy", (email, price, timestamp) => {
  console.log(`Someone brought a ticket for ${price}`);
  emailService.send(email);
  databaseService.save(email, price, timestamp);
});

ticketManger1.buy("its.div09@gmail.com", 290);

/* 
--> Handling Error Events
>> If an event emitter cannot perform its action, it should emit an event to signal that the action failed. In Node.js, the standard way for an event emitter to signal failure is by emitting an error event.

* An error event must have its name set to error. It must also be accompanied by an Error object.

Our ticket manager decreases the supply by one every time the buy() function is called. Right now there’s nothing stopping it from selling more tickets than it has available. Let’s modify the buy() function so that if the ticket supply reaches 0 and someone wants to buy a ticket, we emit an error indicating that we’re out of stock.

Now edit the buy() function as follows:

buy(email,price){
    if(this.supply > 0){
        this.supply—;
        this.emit("buy", email, price, Date.now());
        return;
    }

    this.emit("error",new Error("There are no more tickets left to purchase"))
}

+ Now Let’s set up a listener for errors. 

ticketManger1.on("error", (err)=>{
    console.error(`Gracefully handling our error: ${error}`);
})

$ Event emitters come with some mechanisms to monitor and control how many listeners are subscribed to an event. To get an overview of how many listeners are processing an event, we can use the listenerCount() method that’s included in every object.


*/

console.log(
  `We have ${ticketManager.listenerCount("buy")} listener(s) for the buy event`
);

/* 
$ In Node.js we use the off() function to remove event listeners from an event emitter. The off() method accepts two arguments: the event name and the function that’s listening to it.

Note: Similar to the on() function, Node.js aliases the off() method with removeListener(). They both do the same thing, with the same arguments.

>> ticketManager.off("buy", onBuy);

# If we wanted to remove all events with off(), we could use the removeAllListeners() function. This function accepts one argument: the name of the event we want to remove listeners for.

>> ticketManager.removeAllListeners("buy");
*/
