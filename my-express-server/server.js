const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("<h1>Hello, world!</h1>");
});

app.get("/contact", function (req, res) {
  res.send("Contact me at : mihaitudormare@gmail.com");
});

app.get("/about", function (req, res) {
  res.send("Hello, my name is Mihai and I am a Junior JavaScript Developer");
});

app.get("/hobbies", function (req, res) {
  res.send("<ul> <li>Basketball</li> <li>gym</li> </ul>");
});

app.listen(3000, function () {
  console.log("server started on port 3000");
});
