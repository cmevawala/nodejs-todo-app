// Require Module Patterns
// var math = require("./Math")
// math.counter(["ABC", "PQR", "XYZ"]);
// math.adder(2, 3);

// Events in Nodejs
// var events = require("events")
// var myEmitter = new events.EventEmitter();
// myEmitter.on("someEvent", function(msg) {
//   console.log(msg);
// });
// myEmitter.emit("someEvent", "this event is emitter by myEventEmitter")


// Util in Nodejs
// var events = require("events"); // Events Module
// var util = require("util"); // Utility Module
//
// var Person = function(name) {
//   this.name = name
// }
//
// util.inherits(Person, events.EventEmitter);
//
// var p1 = new Person("p1");
// var p2 = new Person("p2");
// var p3 = new Person("p3");
//
// var persons = [p1, p2, p3];
// persons.forEach(function(person) {
//   person.on("speak", function(msg){
//       console.log(person.name + " said " + msg);
//   });
// })
//
// p1.emit("speak", "p1");
// p2.emit("speak", "p2");
// p3.emit("speak", "p3");


// File Read and Write in Nodejs
// var fs = require("fs");
//
// // Async Read
// fs.readFile("readme.txt", "utf-8", function(error, data) {
//   console.log("Async Read:- " + data);
//   fs.writeFile("writeme.txt", data);
// });
//
// // Sync Read
// var readme = fs.readFileSync("readme.txt", "utf-8");
// console.log("Sync Read:- " + readme);
// fs.writeFileSync("writeme.txt", readme);

// fs.unlink("writeme.txt");
// fs.unlink("readme.txt"); // this is an async method


// Directory Create and Delete in NodeJS
// var fs = require("fs"); // FileSystem Module

// fs.mkdirSync("")
// fs.rmdirSync("") // Remove will not work untill all file are deleted from dir

// Create Directory and Read
// fs.mkdir("src", function() {
//   fs.writeFile("src/readme.txt", "My First Directory File");
//   var readme = fs.readFileSync("./src/readme.txt", "utf-8");
//   console.log("Sync Read:- " + readme);
// });

// Create server
// var http = require("http"); // Http Module
// var server = http.createServer(function(request, response) {
//   response.writeHead(200, {"Content-Type": "text/plain"});
//   response.end("Hello World");
// });
//
// server.listen(3000, "127.0.0.1");
// console.log("Server listening at 127.0.0.1:3000");

// Node JS Streams
// Streams means flow of data. Transferring data from once place to another in chunks
// To transfer data the NodeJS streams use Buffer
// Streams are actually EventEmitter so they can listen and raise events
// Four Types of Streams: Write, Read, Duplex, Transform
// Crypto Module, zlib Module
// var http = require("http");
// var fs = require("fs");
// var myReadStream = fs.createReadStream(__dirname + "/src/readme.txt", "utf-8");
// var myWriteStream = fs.createWriteStream(__dirname + "/src/writeme.txt");
//
// myReadStream.on("data", function(chunk) {
//   console.log("New chunk received..");
//   console.log(chunk);
//   myWriteStream.write(chunk);
// }); // NodeJS Pipes.. Try youself;


// Serving Html
// var http = require("http");
// var fs = require("fs");
// var server = http.createServer(function(request, response) {
//   response.writeHead(200, {"Content-Type": "text/html"});
//    var myReadStream = fs.createReadStream(__dirname + "/index.html", "utf-8");
//    myReadStream.pipe(response)
// });
//
// server.listen(3000, "127.0.0.1");
// console.log("Server listening at 127.0.0.1:3000");


// Serving JSON
// var http = require("http");
// var server = http.createServer(function(request, response) {
//   response.writeHead(200, {"Content-Type": "application/json"});
//   var person = {
//     firstname: "Chitrang",
//     lastname: "Mevawala"
//   }
//
//   // Note: Below end method always expects String or Buffer. So need to serialize JSON object
//   response.end(JSON.stringify(person));
// });
// server.listen(3000, "127.0.0.1");
// console.log("Server listening at 127.0.0.1:3000");


// Basic Routing
var http = require("http");
var fs = require("fs");
var server = http.createServer(function(request, response) {
  console.log("reques was made: " + request.url);
  if (request.url === "/home" || request.url === "/") {
    response.writeHead(200, {
      "Content-Type": "text/html"
    });
    fs.createReadStream(__dirname + "/index.html", "utf-8").pipe(response);
  } else if (request.url === "/contact") {
    response.writeHead(200, {
      "Content-Type": "text/html"
    });
    fs.createReadStream(__dirname + "/pages/contact.html", "utf-8").pipe(response);
  }  else if (request.url === "/api/get") {
    var person = {
      firstname: "Chitrang",
      lastname: "Mevawala"
    }
    response.writeHead(200, {
      "Content-Type": "application/json"
    });
    response.end(JSON.stringify(person));
  } else {
    response.writeHead(200, {
      "Content-Type": "text/html"
    });
    fs.createReadStream(__dirname + "/pages/error.html", "utf-8").pipe(response);
  }
});

server.listen(3000, "127.0.0.1");
console.log("Server listening at 127.0.0.1:3000");
