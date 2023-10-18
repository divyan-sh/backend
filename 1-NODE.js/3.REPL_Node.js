/* 
$ REPL Node.js
  # Read Eval Print and Loop (REPL)
  It specifies a computer environment like a window console or a Unix/Linux shell where you can enter the commands and the system responds with an output in an interactive mode.

>> Basically it is noting but just a simple shell in which you write chunks of JS code and the engine behind node.js that is v8 chrome engine interpret it and give you the output.

#Just like JShell in JAVA. ^_^

-- The Node.js or node come bundled with REPL environment. 
* all you have to do is open your cmd or linux shell and just type node and hit enter that's all you have successfully landed in REPL environment ^_~.

Each part of the REPL environment has a specific work-->

#1> Read: It reads user's input; parse the input into JavaScript data-structure and stores in memory.
#2> Eval: It takes and evaluates the data structure.
#3> Print: It prints the result.
#4> Loop: It loops the above command until user press ctrl-c twice.


$ Simple expressions: After starting REPL node command prompt put any mathematical expression:

Ab yaha konsa code likhu cmd me jake krna gadhe😂🤣 chal example toh de hi skta hu-->
> 10-10
0
> 10-10-20-45-10000000000000000+100000000000000000
89999999999999940



$ Using variable:
# Variables are used to store values and print later.
# If you don't use var keyword then value is stored in the variable and printed
# whereas if var keyword is used then value is stored but not printed, & then You can print variables using console.log().

Try it bro down in the CMD hehehe😂
> a="cnu"
'cnu'
> a=cnu
Uncaught ReferenceError: cnu is not defined
> a='cnu'
'cnu'
> var b='shraddha'
undefined
> b
'shraddha'
> console.log(b)
shraddha
undefined

$ Multiline expressions: Node REPL supports multiline expressions like JavaScript. 
See the following do-while loop example:
> var i=0
undefined
> do{
... i++
... console.log("i:", i)
... } while(i<5)
i: 1
i: 2
i: 3
i: 4
i: 5
undefined

$ Underscore Variable: You can also use underscore _ to get the last result. 
> var a=50
undefined
> var b=50
undefined
> a*b
2500
> sum= _ // here i use _ to fetch the last result and store it in sum.
2500
> console.log(sum)
2500
undefined
>

$$ Node.js REPL Commands: (Copy paste kr rha hu ^_~)
Commands	        Description
ctrl + c	        It is used to terminate the current command.
ctrl + c (twice)	It terminates the node repl.
ctrl + d	        It terminates the node repl.
up/down keys	    It is used to see command history and modify previous commands.
tab keys	        It specifies the list of current command.
.help	            It specifies the list of all commands.
.break	            It is used to exit from multi-line expressions.
.clear	            It is used to exit from multi-line expressions.
.save filename	    It saves current node repl session to a file.
.load filename	    It is used to load file content in current node repl session.

*/
