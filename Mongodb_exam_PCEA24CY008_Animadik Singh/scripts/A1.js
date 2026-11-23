// Step 1: create database and insert one student
use college
db.students.insertOne({ rollNo: 101, name: "Arun", dept: "CSE", marks: 78, city: "Chennai" })

// Step 2: insert four more students
db.students.insertMany([
  { rollNo: 102, name: "Priya",   dept: "ECE",  marks: 85, city: "Madurai" },
  { rollNo: 103, name: "Karthik", dept: "CSE",  marks: 55, city: "Chennai" },
  { rollNo: 104, name: "Meena",   dept: "MECH", marks: 70, city: "Coimbatore" },
  { rollNo: 105, name: "Suresh",  dept: "CSE",  marks: 91, city: "Trichy" }
])

// Step 3: display all students, then only CSE students
db.students.find()
db.students.find({ dept: "CSE" })

// Step 4: correct marks of roll number 103 to 68
db.students.updateOne({ rollNo: 103 }, { $set: { marks: 68 } })

// Step 5: add field semester = 3 to every CSE student
db.students.updateMany({ dept: "CSE" }, { $set: { semester: 3 } })

// Step 6: delete roll number 104 (left the college)
db.students.deleteOne({ rollNo: 104 })

// Step 7: total number of students remaining
db.students.countDocuments()
