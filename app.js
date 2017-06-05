var express = require("express");

// Why Express JS?
// Support for Templatic Engines
// Strong Middleware Support
// Routing Support
var app = express();

// Problem: When we want to display data dynamically comming from database, we use templating engines
// Templating engines allows us to embed JS and Data dynamically into Html file, very similiar to ASP.NET mvc Razor
// Options available are: ejs, handlebars, muchtache, hogan, jade
app.set("view engine", "ejs");

// Load Static Files
app.use("/assets", express.static("assets"));

app.get("/", function(request, response) {
  // response.send("Hello Express - NodeJS Minimiliastic Framework");-
  response.sendFile(__dirname + "/index.html");
});

app.get("/contact", function(request, response) {
  // response.send("This is a contact page");
  response.sendFile(__dirname + "/pages/contact.html");
});

app.get("/profile/", function(request, response) {
  // response.send("Your profile id: " + request.params.id);
  response.sendFile(__dirname + "/pages/profile.html");
});

app.get("/profile/:id", function(request, response) {
  // response.send("Your profile id: " + request.params.id);
  var hobbies = ["ABC", "PQR", "XYZ"]
  response.render("profile", { profileId: request.params.id, data: hobbies });
});

app.listen(3000);
