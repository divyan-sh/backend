/* 
Heelloooo ya !!!

Today we will see OS Module through which we can integrates with our OS. so let's get straight into it...

$ This module provides many functions that you can use to retrieve information from the underlying operating system and the computer the program runs on, and interact with it.

> 1.	os.arch()	            This method is used to fetch the operating system CPU architecture.
> 2.	os.cpus() 	            This method is used to fetch an array of objects containing information about each cpu/core installed: model, speed (in MHz), and times (an object containing the number of milliseconds the cpu/core spent in: user, nice, sys, idle, and irq).
> 3.	os.endianness()	        This method returns the endianness of the cpu. Its possible values are 'BE' for big endian or 'LE' for little endian.
> 4.	os.freemem()	        This methods returns the amount of free system memory in bytes.
> 5.	os.homedir()	        This method returns the home directory of the current user.
> 6.	os.hostname()           This method is used to returns the hostname of the operating system.
> 7.	os.loadavg()	        This method returns an array containing the 1, 5, and 15 minute load averages. The load average is a time fraction taken by system activity, calculated by the operating system and expressed as a fractional number.
> 8.	os.networkinterfaces()	This method returns a list of network interfaces.
> 9.	os.platform()	        This method returns the operating system platform of the running computer i.e.'darwin', 'win32','freebsd', 'linux', 'sunos' etc.
> 10.	os.release()	        This method returns the operating system release.
> 11.	os.tmpdir()	            This method returns the operating system's default directory for temporary files.
> 12.	os.totalmem()	        This method returns the total amount of system memory in bytes.
> 13.	os.type()	            This method returns the operating system name. For example 'linux' on linux, 'darwin' on os x and 'windows_nt' on windows.
> 14.	os.uptime()	            This method returns the system uptime in seconds.
> 15.	os.userinfo([options])	This method returns a subset of the password file entry for the current effective user.
*/

const os = require("os");

console.log(`My PC Specs using Node/js Module \n`);

console.log(`OS Architecture: ${os.arch()} \n`);

console.log(`OS endianness: ${os.endianness()} \n`);

console.log(`OS Free Memory: ${os.freemem() / 1024 / 1024 / 1024} \n`);

console.log(`OS Total Memory: ${os.totalmem() / 1024 / 1024 / 1024} \n`);

console.log(`OS Home DIR: ${os.homedir()} \n`);

console.log(`OS Host Name: ${os.hostname()} \n`);

console.log("os.loadavg(): ", os.loadavg() + "\n");

console.log("os.platform(): ", os.platform() + "\n");

console.log("os.release(): ", os.release() + "\n");

console.log("os.tmpdir(): ", os.tmpdir() + "\n");

console.log("os.type(): ", os.type() + "\n");

console.log("os.uptime(): ", os.uptime() + "\n\n");

console.log("os.networkInterfaces(): \n", os.networkInterfaces());

console.log("os.cpus(): \n", os.cpus());
