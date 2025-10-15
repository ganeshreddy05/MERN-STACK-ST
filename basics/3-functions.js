//classic function

// function getFullName(firstname){
//     const lastname = "Addulamala";
//     return`${firstname} ${lastname }`;
// }
// //function calling
// console.log(getFullName("joshna"));
// let FullName = getFullName("ganesh");
//console.log(FullName);

//ES modern arrow functions () =>(),()=>{} 
    // let getFullName = (firstname) => {
//     const lastname = "Addulamala";
//     return`${firstname} ${lastname }`;
// }
// //function calling
// console.log(getFullName("joshna reddy "));
// let FullName = getFullName("ganesh");
// console.log(FullName);

// //using const
const getFullName1 = (age) =>{
    console.log(`getFullname() is called ! ${age}` );
    
}   
getFullName1(234);
//asignment-1
const Student_tribe1=[];
function addStudent(name, age, city, dob) {
    Student_tribe1.push({ name, age, city, dob }); 
}


addStudent("ganesh", 23, "kurnool", "05-05-2002");
addStudent("joshna reddy", 25, "jadcherla", "06-02-2000");

console.log(Student_tribe1);
