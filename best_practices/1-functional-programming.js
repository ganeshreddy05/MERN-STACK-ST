const myName = "Sundeeep Dasari";
const myFriends = [
    {
        name: "Suresh",
        age: 24
    },
    {
        name: "Vineela",
        age: 23
    },
    {
        name: "Nikhil",
        age: 25
    }
];

myFriends.push({
    name: "Charan",
    age: 24
});
// console.table(myFriends);

// task: Add one year to the age of myFriend Suresh
for (let friendIndex of myFriends) {
    if(myFriends[friendIndex].name === "Nikhil"){
        myFriends[friendIndex].age = myFriends[friendIndex].age + 1;
    }
}

console.table(myFriends)

