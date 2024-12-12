import mongoose from "mongoose";
import express from "express";
import { Todo } from "./models/Todo.js";
let a = await mongoose.connect("mongodb://localhost:27017/todo");
const app = express();
const port = 3000;

app.get("/api", async (req, res) => {
  const todo = await new Todo({
    title: "Hey",
    desc: "description",
    isDone: false,
    days: 12,
  });
  todo.save();
  res.json({ title: todo.title, desc: todo.desc, isDone: todo.isDone });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
