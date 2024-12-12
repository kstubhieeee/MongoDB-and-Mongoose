use("sigma");

// CREATE

// Insert a few documents into the sales collection.
// db.getCollection("courses").insertMany([
//   { name: "Kaustubh", age: 20, hobbies: "football" },
//   { name: "Aman", age: 22, hobbies: "basketball" },
//   { name: "Neha", age: 19, hobbies: "reading" },
//   { name: "Rahul", age: 21, hobbies: "music" },
//   { name: "Sanya", age: 23, hobbies: "painting" },
//   { name: "Vikas", age: 24, hobbies: "cricket" },
//   { name: "Priya", age: 18, hobbies: "dancing" },
//   { name: "Ravi", age: 25, hobbies: "photography" },
//   { name: "Rita", age: 22, hobbies: "swimming" },
//   { name: "Amit", age: 26, hobbies: "coding" },
//   { name: "Jaya", age: 20, hobbies: "traveling" },
//   { name: "Raj", age: 21, hobbies: "gaming" },
//   { name: "Suresh", age: 27, hobbies: "hiking" },
//   { name: "Ananya", age: 19, hobbies: "yoga" },
//   { name: "Nikhil", age: 22, hobbies: "biking" },
//   { name: "Pooja", age: 23, hobbies: "cooking" },
//   { name: "Siddharth", age: 24, hobbies: "writing" },
//   { name: "Manoj", age: 28, hobbies: "gardening" },
//   { name: "Shreya", age: 20, hobbies: "singing" },
//   { name: "Harsh", age: 25, hobbies: "fishing" },
// ]);

// READ

/*let courses = db.courses.find();
// console.log(courses);
console.log(courses.toArray());
*/

// let courses = db.courses.find({ age: 20 });
// console.log(courses.toArray());

// UPDATE

// update for one
// db.courses.updateOne({ age: 20 }, { $set: { age: 19 } });

//update for many
// db.courses.updateMany({ age: 20 }, { $set: { age: 19 } });

// DELETE

// delete one
// db.courses.deleteOne({ name: "Aman" });

// delete many
// db.courses.deleteMany({ age: 21 });
