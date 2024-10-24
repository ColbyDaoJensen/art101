// index.js - arrays and objects
// Author: Colby DaoJensen
// Date: 10/24/24

// sortUserName - a function that takes user input to sort the letters of
// their name
function sortUserName() {
    var userName = window.prompt("Hi! Please tell me your name so I can fix it.");
    console.log("userName = ", userName);
}

// Create object for Main Ride
myMainRide = {
    make: "Toyota",
    model: "Corolla",
    color: "White",
    year: 2007,
    // Defines a function within the object, known as a method
    // The value is this.year
    age: function() {
        return 2024 - this.year;
    }
}

// output
document.writeln("Kinds of transportation I use: ", myTransport, "</br>");
// write an object to a document
document.writeln("My Main Ride: <pre>", 
  JSON.stringify(myMainRide, null, '\t'), "</pre>");
