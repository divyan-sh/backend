/* 
Today we will learn about the NPM..

$ NPM Node Package Manger..
It is the package manager for the node js using which you can import javascript modules available in the NPM library..

It is a awesome tool....

To start using it first you have to initialize it..
i.e 
>> npm init
this will ask some information about your project and then create a package.json file..
? What is package.json file..it is a json file which contains all the information about your project from project name to the external modules which u used in your project.

+ Any external modules which you install using npm get listed in package.json file as a dependency..so that later on anybody who will see your project get informed that these are the external modules which i used in this project for proper working of this project.


Now let;s show you a quick demo of the npm library..

one of the most famous module in npm is Chalk, there is nothing logical in it, it is the module used of the styling of the terminal..
that is when you console.log you will see a simple and boring output in it but using chalk.js you can make your terminal colorful.

to install it 
>> npm install chalk

Now you can go and check you package.json file.. a chalk.js is added in your dependency list-->
*/

const chalk = require("chalk");
const validator = require("validator");

const log = console.log;

log(chalk.blue("Hello CNU"));

log(chalk.blue.bold("CNU ^_~"));

// # Combine styled and normal strings
log(chalk.blue("Hello") + " World" + chalk.red("!"));

// #Compose multiple styles using the chainable API
log(chalk.blue.bgRed.bold("Hello world!"));

// #Pass in multiple arguments
log(chalk.blue("Hello", "World!", "Foo", "bar", "biz", "baz"));

// #Nest styles
log(chalk.red("Hello", chalk.underline.bgBlue("world") + "!"));

// #Nest styles of the same type even (color, underline, background)
log(
  chalk.green(
    "I am a green line " +
      chalk.blue.underline.bold("with a blue substring") +
      " that becomes green again!"
  )
);

// #ES2015 template literal
log(`
CPU: ${chalk.red("90%")}
RAM: ${chalk.green("40%")}
DISK: ${chalk.yellow("70%")}
`);

// #ES2015 tagged template literal
log(chalk`
CPU: {red 80%}
RAM: {green 90%}
DISK: {rgb(255,131,0) 56%}
`);

// #Use RGB colors in terminal emulators that support it.
log(chalk.keyword("orange")("Yay for orange colored text!"));
log(chalk.rgb(123, 45, 67).underline("Underlined reddish color"));
log(chalk.hex("#DEADED").bold("Bold gray!"));

/* 
Now let's see another module from NPM
>> validator.js, A library of string validators and sanitizers. 
This library validates and sanitizes strings only.

+ npm i validator
*/
log("\n-----------------Validator---------------------\n");
const email = "hey.cnu09@gmail.com";
const wrongEmail = "abc123gamil,com";

const result1 = validator.isEmail(email);
const result2 = validator.isEmail(wrongEmail);

log(result1 ? chalk.green.inverse(result1) : chalk.red.inverse(result1));
log(result2 ? chalk.green.inverse(result2) : chalk.red.inverse(result2));
