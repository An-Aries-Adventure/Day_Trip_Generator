"use strict"
// Learning objective: Use and practice JavaScript fundamentals, with an emphasis on Single Responsibility.
// Technologies: JavaScript, HTML, CSS, Bootstrap
// Features: 
// (5 points): As a developer, I want to make good, consistent commits.

// (5 points): As a user, I want a destination to be randomly selected for my day trip.


let destinationCity = ["Dallas", "Orlando", "Pheonix", "Twin Falls", "Nashville", "Savannah", "Biloxi", "Cheyanne" ];


// (5 points): As a user, I want a restaurant to be randomly selected for my day trip.

let restaurant = ["In-n-Out Burger", "Milwaukee Burger Company", "Franklin's BBQ", "The Burnt Lemon Grill", "4 Rivers BBQ", "The Fat Snook", "Junior's Cheesecake", "Rising Tide"];

// (5 points): As a user, I want a mode of transportation to be randomly selected for my day trip.

let typeOfTransportation = ["Car", "Truck", "Bicycle", "Foot", "Train", "Plane", "Bus", "Uber" ];

// (5 points): As a user, I want a form of entertainment to be randomly selected for my day trip.

let entertainment = ["Playing cards, Counting license plates", "Singing", "Sleeping", "Watching movies"];

// (15 points): As a user, I want to be able to randomly re-select a destination, restaurant, mode of transportation, and/or form of entertainment if I don’t like one or more of those things.


// (10 points): As a user, I want to be able to confirm that my day trip is “complete” once I like all of the random selections.

// (10 points): As a user, I want to display my completed trip in the console.

// (5 points): As a developer, I want all of my functions to have a Single Responsibility. Remember, each function should do just one thing!
function generateRandomTrip(){
    let randomDestinationCity = destinationCity[Math.floor(Math.random()*destinationCity.length)];
    let randomRestaurant = restaurant[Math.floor(Math.random()*restaurant.length)]
    let randomtypeOfTransportation = typeOfTransportation[Math.floor(Math.random()*typeOfTransportation.length)];
    let randomTypeOfEntertainment = entertainment[Math.floor(Math.random()*entertainment.length)];
    let result = randomDestinationCity + ", " + randomRestaurant + ", " + randomtypeOfTransportation + ", " +randomTypeOfEntertainment;
    return result;
}


function chooseDayTrip() {
 let userInput = prompt(" Would you like to go on a day trip? Please select Yes or No: ");
    
if (userInput == "Yes" || userInput == "yes"){
        console.log("Calculating!");
        let trip = generateRandomTrip();
        console.log("Here is your itinerary: " + trip);

    let satisfaction = prompt("Do you like your trip?");
    if (satisfaction == "Yes" || satisfaction == "yes"){
        console.log("Great! Enjoy your trip!");
    }
    else {
        while (satisfaction == "No" || satisfaction == "no"){
          let trip =  generateRandomTrip();
        console.log("Sorry, is this better?");
        console.log(trip);
        satisfaction = prompt("Do you like your trip");
        }
    }
}
else if (userInput == "No" || userInput == "no"){
    console.log("Sorry to hear that. Please come back when you're ready to go on a trip.");
    chooseDayTrip()
  }
else { 
    console.log("Oops sorry, I didn't get that. Please try again.");
    chooseDayTrip()
    
    }
}


chooseDayTrip()