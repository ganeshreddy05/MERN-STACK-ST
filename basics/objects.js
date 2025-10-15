//Create a database 
 const Student_tribe1=[];
// //step-2 create a individual studen object
// let ganesh={
//     name : "ganesh",
//     age : 23,
//     city : "kurnool",
//     dob : " 05-05-2002",

// }
// let joshna={
//     name : "joshna reddy",
//     age : 25,
//     city : "jadcherla",
//     dob : "06-02-2000",
// }
// //push that data into student_tribe
// Student_tribe.push(ganesh);
// Student_tribe.push(joshna);
// console.log(Student_tribe);



// //assignment1
// const Student_tribe1 = [];

function addStudent(name, age, city, dob) {
    Student_tribe1.push({ name, age, city, dob }); 
}


addStudent("ganesh", 23, "kurnool", "05-05-2002");
addStudent("joshna reddy", 25, "jadcherla", "06-02-2000");

console.log(Student_tribe1);
