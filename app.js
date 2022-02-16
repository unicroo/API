const express = require("express");
const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

var users = [];

app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/users", (req, res) => {
  console.log(req.body);
  users.push(req.body);
  //res.json(users);
  res.redirect("/index.html");
});
var actors = [];

app.get("/actors", (req, res) => {
  res.json(actors);
});

app.post("/actors", (req, res) => {
  console.log(req.body);
  actors.push(req.body);
  //res.json(user);
  res.redirect("/index.html");
});
var views = [];

app.get("/views", (req, res) => {
  res.json(views);
});

app.post("/views", (req, res) => {
  console.log(req.body);
  views.push(req.body);
  //res.json(user);
  res.redirect("/index.html");
});
var us = [];

app.get("/us", (req, res) => {
  res.json(us);
});

app.post("/us", (req, res) => {
  console.log(req.body);
  us.push(req.body);
  //res.json(user);
  res.redirect("/index.html");
});
app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});
