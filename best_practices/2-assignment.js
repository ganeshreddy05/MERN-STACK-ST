console.log("assignemnt2");

let GANESH_WALLET_BALANCE = 1000;
let SATHWIK_WALLET_BALANCE = 200;

// Array of driver objects
const DRIVERS = [
  { id: "D001", name: "Arjun", available: true },
  { id: "D002", name: "Meera", available: true },
  { id: "D003", name: "Rahul", available: false }
];

// Array of rider objects
const RIDERS = [
  { id: "R001", name: "Sundeeep", walletBalance: 1000 },
  { id: "R002", name: "Keerthi", walletBalance: 200 }
];

// Empty array to store ride objects
let RIDES = [];

function matchDrivers(Drivers){
    for(let available in Drivers){
        if(DRIVERS.available===true){
            return true;
        }
        else{
            "Driver is not available"
        }
    }

}