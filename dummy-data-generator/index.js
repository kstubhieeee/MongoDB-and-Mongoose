import mongoose from "mongoose";
import express from "express";
import { Employee } from "./models/Employee.js";

let conn = await mongoose.connect("mongodb://localhost:27017/company");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

const getRandom = (arr) => {
  let rno = Math.floor(Math.random() * (arr.length - 1));
  return arr[rno];
};

app.get("/", (req, res) => {
  res.render("index", { foo: "FOO" });
});

app.get("/generate", async (req, res) => {
  // Clear the collection Employee
  await Employee.deleteMany({});

  // Generate random data
  let randomNames = ["Rohan", "Sohan", "Mohan", "Sobhan"];
  let randomLang = ["Python", "js", "C++", "Java"];
  let randomCities = ["Bilaspur", "Moradabad", "Mysore", "Kolkata"];

  let employees = [];
  for (let index = 0; index < 10; index++) {
    let e = await Employee.create({
      name: getRandom(randomNames),
      salary: Math.floor(Math.random() * 22000),
      language: getRandom(randomLang),
      city: getRandom(randomCities),
      isManager: Math.random() > 0.5 ? true : false,
    });
    employees.push(e); // Store employee records
  }

  // Send the created employees as JSON response
  res.json(employees);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
