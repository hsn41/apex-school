const express = require("express");
const bodyParser = require("body-parser");
const { mongoose } = require("./db");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log("First Header Middleware");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.post("/api/posts", (req, res, next) => {
  console.log("Routing Middleware");
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: "Post added successfully"
  });
});

app.get("/api/students", (req, res, next) => {
  console.log("Routing Middleware");

  const students = [
    {
      id: "32312",
      name: "Hassan",
      email: "hsnch@gmail.com"
    },
    {
      id: "3432",
      name: "Hassan",
      email: "hsnch@gmail.com"
    }
  ];
  res.status(200).json({
    message: "Students fetched successfully!",
    students: students
  });
});

module.exports = app;
