

console.log("java script Dataypes");

//let username1;
//username1=235;
//console.log(username1);

//let xyz=null;
//let username=xyz;
//primitive datatypes
username="ganesh"//string
username =null;//null
username=true;//boolean
username;//not defiened
username=350;//number
username = Symbol(123);//symbol
username = BigInt(1234456789045678);//bigint

//console.log(typeof username);

//const ganesh  = null;
//console.log( typeof ganesh);

//const username2 = "ganesh";
//username2 = "ganesh"

//object : curly braces,key:value pair,comma seperated

 let instagram ={
    username3 :"ganesh",
   age : 23
 }
console.log( "instagram original",instagram);

let twitter=instagram
console.log("twitter original :",twitter);
twitter.username3 = 'ganesh365'

console.log("instagram original :",instagram);
console.log("twitter original :",twitter);


//
let instagram1 ={
    username3 :"ganesh",
   age : 23
 }
console.log( "instagram original",instagram1);

let twitter2 = {
    ...instagram1,
    username3:"ganesh"
   }; 

console.log("twitter original :",twitter2);
console.log("instagram original :",instagram1);