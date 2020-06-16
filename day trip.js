"use strict"
// Learning objective: Use and practice JavaScript fundamentals, with an emphasis on Single Responsibility.
// Technologies: JavaScript, HTML, CSS, Bootstrap
// Features: 
// (5 points): As a developer, I want to make good, consistent commits.

// (5 points): As a user, I want a destination to be randomly selected for my day trip.



let destinationCity = ["Dallas", "Orlando", "Pheonix", "Twin Falls", "Nashville", "Savannah", "Biloxi", "Cheyanne" ];
let randomDestinationCity = destinationCity[Math.floor(Math.random()*destinationCity.length)]


// (5 points): As a user, I want a restaurant to be randomly selected for my day trip.

let resturant = ["In-n-Out Burger", "Milwaukee Burger Company", "Franklin's BBQ", "The Burnt Lemon Grill", "4 Rivers BBQ", "The Fat Snook", "Junior's Cheesecake", "Rising Tide"];
let randomeRestruant = resturant[Math.floor(Math.random()*resturant.length)]

// (5 points): As a user, I want a mode of transportation to be randomly selected for my day trip.


let typeOfTransportation = ["Car", "Truck", "Bicycle", "Foot", "Train", "Plane", "Bus", "Uber" ];
let randomTypeOfTransportation = typeOfTransportation[Math.floor(Math.random()*typeOfTransportation.length)]

// (5 points): As a user, I want a form of entertainment to be randomly selected for my day trip.

let entertainment = ["Playing cards, Counting license plates", "Singing", "Sleeping", "Watching movies"];
let randomTypeOfEntertainment = entertainment[Math.floor(Math.random()*entertainment.length)]

// (15 points): As a user, I want to be able to randomly re-select a destination, restaurant, mode of transportation, and/or form of entertainment if I don’t like one or more of those things.
// (10 points): As a user, I want to be able to confirm that my day trip is “complete” once I like all of the random selections.
// (10 points): As a user, I want to display my completed trip in the console.
// (5 points): As a developer, I want all of my functions to have a Single Responsibility. Remember, each function should do just one thing!

 
  function daytrip(){
 console.log("You will be travling to: "(randomDestinationCity));
 console.log("You will be stopping to eat at: "(randomeRestruant));
 console.log("You will be traveling by: "(randomTypeOfTransportation));
 console.log("You will be entertained by:" (randomTypeOfEntertainment))
  }


// let userInput = prompt("Please select Yes or No. Would you like to go on a day trip?: ");
// if (userInput == "Yes" || "yes"){
//     console.log("Great! Calculating!");
// else if (userInput == "No" || "no")
//     console.log("Sorry to hear that. Please come back when you're ready to go on a trip.");
// else 
//     console.log("Please make another selection.")
// }