/* 

Today we will get a deeper dive into API's, so let's see-->

$ WHAT IS API?
> API is the acronym for Application Programming Interface, which is a software intermediary that allows two applications to talk to each other. Each time you use an app like Facebook, send an instant message, or check the weather on your phone, you’re using an API.

so this is Kitabi definition, it is correct but let us define this in our way..

+ So API's are the code that written to programmatically interact with a separate software component or resource.

+ API's are nothing but a code that is written to handle the request and to send to requested response..

+ API's are just a transport system on the web..using the API's we get all our data from a server.

+ An API is a set of programming code that enables data transmission between one software product and another. It also contains the terms of this data exchange.

+ Normally when u request some resources from a server and in return server respond you with the required resources this happens because at server a code is written (this code is a API) in that code it is written that if this particular request comes at server then you have to respond with this particular resources..

+ A most practical ex of API is login with google functionality, when we use sign in with google option on any site.
  on backend it is not possible to connect to google database and check weather the user is stored in your database or not only google can access its database,
  so google gives us a API which we call that is we send request to google server with a particular username and password,
  then the API code which is written at google server will do all its work i.e check for the user in the DB and in return it will gives true or false depending on user is stored in their database or not.
  - hence here a API connect two different program.

+ Here is a real-life API example. You may be familiar with the process of searching flights online, 
  Let us imagine that you’re booking you are flight on an airline website. 
  You choose a departure city and date, a return city and date, cabin class, as well as other variables. 
  In order to book your flight, you interact with the airline’s website to access their database and see if any seats are available on those dates and what the costs might be.
  However, what if you are not using the airline’s website––a channel that has direct access to the information? What if you are using an online travel service, such as Yatra.com or goibibo, which aggregates information from a number of airline databases?
  The travel service, in this case, interacts with the airline’s API. 
  The API is the interface that, like your helpful waiter, can be asked by that online travel service to get information from the airline’s database to book seats, baggage options, etc. 
  The API then takes the airline’s response to your request and delivers it right back to the online travel service, which then shows you the most updated, relevant information.

+ We can also take API as a function which is on the server we don't know the actual code inside it, but we just cal the function and in return it gives us some useful response.

>> When you type www.facebook.com into your browser, a request goes out to Facebook’s remote server. Once your browser receives the response, it interprets the code and displays the page.
>> To the browser, also known as the client, Facebook’s server is an API. This means that every time you visit a page on the Web, you interact with some remote server’s API.
>> An API isn’t the same as the remote server — rather it is the part of the server that receives requests and sends responses.

$ TYPE OF API: by Availability
  
--1: Private APIs. These application software interfaces are designed for improving solutions and services within an organization. In-house developers or contractors may use these APIs to integrate a company’s IT systems or applications, build new systems or customer-facing apps leveraging existing systems. Even if apps are publicly available, the interface itself remains available only for those working directly with the API publisher. The private strategy allows a company to fully control the API usage.

--2: Partner APIs. Partner APIs are openly promoted but shared with business partners who have signed an agreement with the publisher. The common use case for partner APIs is software integration between two parties. A company that grants partners with access to data or capability benefits from extra revenue streams. At the same time, it can monitor how the exposed digital assets are used, ensure whether third-party solutions using their APIs provide decent user experience, and maintain corporate identity in their apps.

--3: Public APIs. Also known as developer-facing or external, these APIs are available for any third-party developers. A public API program allows for increasing brand awareness and receiving an additional source of income when properly executed.
  > There are two types of public APIs – open (free of charge) and commercial ones
    + OPEN API: API Definition suggests that all features of such an API are public and can be used without restrictive terms and conditions. For instance, it’s possible to build an application that utilizes the API without explicit approval from the API supplier or mandatory licensing fees.

    + Commercial API: Commercial API users pay subscription fees or use APIs on a pay-as-you-go basis. A popular approach among publishers is to offer free trials, so users can evaluate APIs before purchasing subscriptions.


$ APIs by use cases: 

--1: Database APIs. Database APIs enable communication between an application and a database management system. Developers work with databases by writing queries to access data, change tables, etc. The Drupal 7 Database API, for example, allows users to write unified queries for different databases, both proprietary and open source (Oracle, MongoDB, PostgreSQL, MySQL, CouchDB, and MSSQL).
BEST Example for me firestore functions, so these functions are nothing but the database API's by which we do CRUD operation on the firestore Database.

--2: Operating systems APIs. This group of APIs defines how applications use the resources and services of operating systems. Every OS has its set of APIs, for instance, Windows API or Linux API (kernel–user space API and kernel internal API).

--3: Remote APIs. Remote APIs define standards of interaction for applications running on different machines. In other words, one software product accesses resources located outside the device that requests them, which explains the name. Since two remotely located applications are connected over a communications network, particularly the internet, most remote APIs are written based on web standards. Java Database Connectivity API and Java Remote Method Invocation API are two examples of remote application programming interfaces.

--4: Web APIs. This API class is the most common. Web APIs provide machine-readable data and functionality transfer between web-based systems which represent client-server architecture. These APIs mainly deliver requests from web applications and responses from servers using Hypertext Transfer Protocol (HTTP).
Developers can use web APIs to extend the functionality of their apps or sites. For instance, the Pinterest API comes with tools for adding users’ Pinterest data like boards or Pins to a website. Google Maps API enables the addition of a map with an organization’s location.

$ API specifications/protocols: basically rules or the standards for the sharing of resources using the API.
  The goal of API specifications is to standardize data exchange between web services. In this case, standardization means the ability of diverse systems, written in different programming languages and/or running on different OSs, or using different technologies, to seamlessly communicate with each other.

--1: Remote Procedure Call (RPC): Web APIs may adhere to resource exchange principles based on a Remote Procedure Call. This protocol specifies the interaction between client-server based applications. One program (client) requests data or functionality from another program (server), located in another computer on a network, and the server sends the required response.
RPC is also known as a subroutine or function call. One of two ways to implement a remote procedure call is SOAP.

# Service Object Access Protocol (SOAP): SOAP is a lightweight protocol for exchanging structured information in a decentralized, distributed environment, according to the definition by Microsoft that developed it. 
Generally speaking, this specification contains the syntax rules for request and response messages sent by web applications. APIs that comply with the principles of SOAP enable XML messaging between systems through HTTP or Simple Mail Transfer Protocol (SMTP) for transferring mail.
> SOAP is mostly used with enterprise web-based software to ensure high security of transmitted data. SOAP APIs are preferred among providers of payment gateways, identity management and CRM solutions, as well as financial and telecommunication services. PayPal’s public API is one of the commonly known SOAP APIs. It’s also frequently used for legacy system support.

# Representational State Transfer (REST): The term REST was introduced by computer scientist Roy Fielding in a dissertation in 2000. Unlike SOAP, which is a protocol, REST is a software architectural style with six constraints for building applications that work over HTTP, often web services. The World Wide Web is the most common realization and application of this architecture style.
REST is considered a simpler alternative to SOAP, which many developers find difficult to use because it requires writing a lot of code to complete every task and following the XML structure for every message sent. 
>> REST follows another logic since it makes data available as resources. Each resource is represented by a unique URL, and one can request this resource by providing its URL.
>> Web APIs that comply with REST architectural constraints are called RESTful APIs. These APIs use HTTP requests (AKA methods or verbs) to work with resources: GET, PUT, HEAD, POST, PATCH, CONNECT, TRACE, OPTIONS and DELETE.
>> RESTful systems support messaging in different formats, such as plain text, HTML, YAML, XML, and JSON, while SOAP only allows XML. The ability to support multiple formats for storing and exchanging data is one of the reasons REST is a prevailing choice for building public APIs these days.

APIs are RESTful as long as they comply with the 6 guiding constraints of a RESTful system:



*/
