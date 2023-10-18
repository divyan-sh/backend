/* 
So I ma very much confused about this Servers,Backend,Localhost,port Numbers,domain names..

So let me clear my doubts using GOOGLE....
Some ref-->
https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works
https://www.tutorialspoint.com/web_developers_guide/index.htm
https://www.freecodecamp.org/news/how-the-web-works-a-primer-for-newcomers-to-web-development-or-anyone-really-b4584e63585c/


? First let's see how a WEBSITE works...
How the web works provides a simplified view of what happens when you view a webpage in a web browser on your computer or phone.\

$ Computers connected to the web are called clients and servers.
- Clients are the typical web user's internet-connected devices (for example, your computer connected to your Wi-Fi, or your phone connected to your mobile network) and web-accessing software available on those devices (usually a web browser like Firefox or Chrome).
- Servers are computers that store webpages, sites, or apps. 

?When a client device wants to access a webpage, a copy of the webpage is downloaded from the server onto the client machine to be displayed in the user's web browser.

For now, let's imagine that the web is a road. On one end of the road is the client, which is like your house. On the other end of the road is the server, which is a shop you want to buy something from.

>1: Your internet connection: Allows you to send and receive data on the web. It's basically like the street between your house and the shop.

>2: TCP/IP: Transmission Control Protocol and Internet Protocol are communication protocols that define how data should travel across the internet. This is like the transport mechanisms that let you place an order, go to the shop, and buy your goods. In our example, this is like a car or a bike (or however else you might get around).

>3: DNS: Domain Name Servers are like an address book for websites. When you type a web address in your browser, the browser looks at the DNS to find the website's real address before it can retrieve the website. The browser needs to find out which server the website lives on, so it can send HTTP messages to the right place (see below). This is like looking up the address of the shop so you can access it.

>4: HTTP: Hypertext Transfer Protocol is an application protocol that defines a language for clients and servers to speak to each other. This is like the language you use to order your goods.

>5:Component files: A website is made up of many different files, which are like the different parts of the goods you buy from the shop. These files come in two main types:
    +Code files: Websites are built primarily from HTML, CSS, and JavaScript, though you'll meet other technologies a bit later.

    +Assets: This is a collective name for all the other stuff that makes up a website, such as images, music, video, Word documents, and PDFs.

So what happens, exactly?

When you enter something like Google.com into your browser (for our analogy that's like walking to the shop):

-1: The request goes to one of many special computers on the Internet known as Domain Name Servers (DNS), All these requests are routed through various routers and switches. The domain name servers keep tables of machine names(server) and their IP addresses, so when you type in Google.com it gets translated into a number, which identifies the computers that serve the Google Website to you.(you find the address of the shop).

-2: The browser sends an HTTP request message to the server, asking it to send a copy of the website to the client (you go to the shop and order your goods). This message, and all other data sent between the client and the server, is sent across your internet connection using TCP/IP.

-3:The server should constantly be connected to the Internet, ready to serve pages to visitors. If the server approves the client's request, the server sends the client a "200 OK" message, which means "Of course you can look at that website! Here it is", and then starts sending the website's files to the browser as a series of small chunks called data packets (the shop gives you your goods, and you bring them back to your house).

-4: The browser assembles the small chunks into a complete web page and displays it to you (the goods arrive at your door — new shiny stuff, awesome!).

OHKAY so this is what happen exactly...

?So if i talk about URL of my website it is like address of my website or i can say address of my shop. right😁. 

So from above concept i think i want to understand some terms more deeper like: 
+DNS 
+SERVER

? Understanding DNS (Smart Address Diary)
>Real web addresses aren't the nice, memorable strings you type into your address bar to find your favorite websites. They are special numbers that look like this: 63.245.215.20.

>This is called an IP address, and it represents a unique location on the web,However, it's not very easy to remember, is it?

>That's why Domain Name Servers were invented. These are special servers that match up a web address you type into your browser (like "mozilla.org") to the website's real (IP) address.

>Websites can be reached directly via their IP addresses. You can find the IP address of a website by typing its domain into a tool like IP Checker.

So i can say that Domain Name Server is a like a google map which direct the browser to the website of the particular domain name.
Ok so now i also understand that domain name are nothing but the ip address or the address of websites which are on the internet, but domain name are memorable stings not series of long numbers..

$ Now let's have a look at the URL of the website or we can say Address of a website..

The URL or the web address contains information about the location of the webpage.

#https://themeisle.com/blog/fix-broken-links-in-wordpress/

+PROTOCOL  >> The easiest part of this address to overlook is the very first part. You’re probably so used to seeing http:// and https:// at the beginning of every URL that you don’t give it a second thought. However, this element – the URL’s ‘protocol’. The protocol tells your browser how to communicate with a website’s server, in order to send and retrieve information

+DOMAIN NAME >> The next part is the most identifiable element of a web address – the ‘domain name’. In this case, it’s themeisle.com (our website!). A domain name is an identifier for a specific site, which will generally bring you straight to the home page if nothing else is added to the end of it. You know one these domain name are nothing but the IP address of the server @ which your website is stored to something like this (22.231.113.64) >> hence to make the name of the website easily rememberable the long number series is converted into a word string.

+PATH >> If you just wanted to visit our website’s front page, all you would need are the protocol and the domain name: https://themeisle.com. But each individual page or file on a website also has its own URL. Once again, here’s what it looks like: https://themeisle.com/blog/fix-broken-links-in-wordpress/

? Understanding WEB SERVERS....
Every Website sits on a computer known as a Web server.
In others words websites are the data in the form of files and assets like images,videos,gif,etc ok these files are bundled in a particular folder structure..
Ok and this folder is stored in your computer and what are servers it is nothing but just a computers that can be access over internet.. 
Now normally not every user can make servers out of their normal computer..
Big companies like Google, Microsoft, Amazon have their own web servers because they have plenty of data to make available online..
 So servers are nothing but the computers that is connected with the internet and have a particular address.(Every device that connects to the Internet has a unique IP address and looks something like this: 22.231.113.64 or 3ffe:1900:4545:3:200:f8ff:fe21:67cf)
This address is registered in a domain name servers so that it can be easily accessible by web browsers whenever there is a request for this ip address..
(I don't know what this process is called 😑😑)

Now normally user can;t remember that long IP address hence we use domain names such as javatpoint.com or tutorialspoint.com these are nothing but the ip address in word stings .. if you go on any ip Checker tool and type these domain names you will get the of that websites..

There are four leading web servers − Apache, IIS, lighttpd and Jagsaw. Now we will see these servers in bit more detail.

$ What is the difference between my computer and a server computer?
Server is a machine that is connected to the internet and also has an IP address. A server waits for requests from other machines (e.g. a client) and responds to them. 
> Unlike your computer (i.e. the client) which also has an IP address, the server has special server software installed and running which tells it how to respond to incoming requests from your browser. The primary function of a web server is to store, process and deliver web pages to clients. 

MUST TO READ 🔥🔥 https://www.freecodecamp.org/news/how-the-web-works-a-primer-for-newcomers-to-web-development-or-anyone-really-b4584e63585c/

NOW We will see
? What is HOSTING: The process or putting website file on the web server.
Web hosting deals with putting the contents of your website on a Web server. Hosting your website on your own server could be an option. But this will become very much expensive unless you are hosting a site like yahoo.com or google.com. 

--> Now this process may be free or may be not be..
--> because if you have your own server then you can host your website on that server @free of cost..but 
--> If you do not have a server, then you have to use the hosting company these hosting companies will give some space to you on rent to keep your website files and the web server of this hosting company will  provides website content to website visitors.
-->  Buying a server space or renting a complete server from an Internet Service Provider (ISP) is the most widely used option.

$ Hosting Types: 

> Free Hosting: Yes, this is true there are many service providers who will give you free space on their web server with a condition that you will allow them to run their advertisement at your web pages. So if you are OK with this option, then you have nothing to pay for a space. There are some websites like geocities.com, lycos.com, myspace.com, etc. that give you space to build your web pages.

> Shared Hosting: With shared hosting, your website is hosted on a powerful server along with other websites. On a shared host, you will have your own user ID and password to login to the shared host and you will be allowed to work in your work area. You would not be able to touch any file or directory belonging to other host partner. Even you would not know how many sites are hosted on your shared host. This type of hosting is very cost effective and good for small websites where your space and speed are not very important. Here traffic on one site will affect the speed of all other hosted sites.

> Virtual Dedicated Hosting: This type of hosting is better for medium size business. With virtual dedicated hosting, you will have a dedicated bandwidth and dedicated RAM for your site. You will be given a root ID and password to maintain your Web server. You will be the complete owner of your virtual dedicated server and will be able to install or de-install any software. This type of hosting is created on a single server, but it is managed in such a way that every user will have dedicated speed and bandwidth. This is bit more expensive but really good one for medium size business.

> Dedicated Hosting: This type of hosting is very similar to virtual dedicated hosting, but here, a complete machine will be allotted for you. They are more expensive than virtual dedicated hosting and should be considered when you have a very high traffic requirement.

> Collocated Hosting: It is very difficult to set dedicated resources such as high-security against fire and vandalism, regulated backup power, dedicated Internet connections and more. Collocation is the option which allows you 
Within your personal network localhost has a separate IP address like 192.168.0.1.(for most cases) which is different to the one you use on the internet.
This is usually dynamically assigned by the internet service provider (ISP). Localhost can be seen as a server that is used on your own computer.
Localhost is not just the name for the virtual server but it is also its domain name. Just like .example, .test, or .invalid, ., .localhost is a top-level domain reserved for documentation and testing purposes put your machine in a service provider's premises to avail all the available facilities. This is also a very expensive option and should be opted when you have very high traffic requirement.

> More about hosting: https://www.tutorialspoint.com/web_developers_guide/web_hosting_concepts.html


Okay this is all about a online web server
? what about a local server let's peek into it.

So there are certain softwares that turn our computer in local server than can access in  our machine only because it not connect with the internet..
hence we can't access local server from another computer..

There are some terms which you need to know when dealing with local web server..

--> What is Local Host? 
+ When you call an IP address on your computer, you try to contact another computer on the internet but
+ when you call the IP address 127.0.0.1 then you are communicating with the localhost.
+ Localhost is always your own computer. Your computer is talking to itself when you call the localhost.
+ Your computer not always directly identifies the local host.
+ Within your personal network localhost has a separate IP address like 192.168.0.1.(for most cases) which is different to the one you use on the internet.
+ This is usually dynamically assigned by the internet service provider (ISP). Localhost can be seen as a server that is used on your own computer.
+ Localhost is not just the name for the virtual server but it is also its domain name. Just like .example, .test, or .invalid, ., .localhost is a top-level domain reserved for documentation and testing purposes
+ If you access “http://localhost” in the browser, the request will not be forwarded to the internet through the router. It will instead remain in your own system. Localhost has the IP address 127.0.0.1. This refers back to your own server.
+ To communicate with each other within a network IP addresses are used. The participants in the network has their own unique address.
+ The allocation of public IP addresses is regulated by an international organization which is the Internet Corporation for Assigned Names and Numbers (ICANN)
+ But certain address ranges are reserved for special purposes, like the range from 127.0.0.0 to 127.255.255.255.
+ The first class Class A started with 0.0.0.0 (reserved address) and ended with 127.255.255.255. 127 is the last block of the Class A network. Its important position could have been the reason for its selection.
+ Within this address range a Localnet can be set up. The special thing about this range is that IP addresses are not uniquely assigned in it, as is usually the case. Also it was reserved by ICANN.
* If you enter an IP address or corresponding domain name in your browser, the router forwards your request to the internet which corrects you to the server. This means that if you enter 172.217.0.0, you will reach the Google homepage but the situation is different with 127.0.0.1. The requests to this address will not be forwarded to the internet. TCP/IP recognizes from the first block (127) that you don’t want to access the internet, you are calling yourself instead. This then triggers the loopback.

--> What is localhost used for?
+ Developers use the local host to test web applications and programs. Network administrators use the loopback to test network connections. Another use for the localhost is the hosts file, where you can use the loopback to block malicious websites.

$ IN SHORT When we create a local web server then its url seems like this: http://localhost/home.html 
# here localhost represents a domain name with an ip address of 127.0.0.1

Now let's get familiar with one last thing that is PORT

--> PORT:
+ A port is a virtual point where network connections start and end.
+ Ports are software-based and managed by a computer's operating system.
+ Each port is associated with a specific process or service.
+ Ports allow computers to easily differentiate between different kinds of traffic: emails go to a different port than webpages, for instance, even though both reach a computer over the same Internet connection.

--> PORT NUMBER:
+ Ports are standardized across all network-connected devices, with each port assigned a number.
+ ports are reserved for certain protocols — for example, all Hypertext Transfer Protocol (HTTP) messages go to port 80. While IP addresses enable messages to go to and from specific devices, port numbers allow targeting of specific services or applications within those devices.
+ For development there are 2 most common port number used with localhost 3000 and 8000
*/
