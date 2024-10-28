// index.js - anon function and callbacks
// Author: Colby DaoJensen
// Date: 10/31/24

// sortUserName - a function that takes user input to sort the letters of
// their name
function sortUserName() {
    var userName = window.prompt("Hi! Please tell me your name so I can fix it.");
    console.log("userName = ", userName);
    // Splits the string into an array
    var nameArray = userName.split('');
    console.log("nameArray = ", nameArray);
    // Sorts the array
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort = ", nameArraySort);
    // Joins an array back to a string
    var nameSorted = nameArraySort.join();
    console.log("nameSorted = ", nameSorted);
    
    // Returns sorted user name
    return nameSorted;
}

// output
document.writeln("Oh hey, I've fixed your name: ",
    sortUserName(), "</br>");