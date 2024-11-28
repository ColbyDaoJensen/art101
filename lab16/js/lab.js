// index.js - anon function and callbacks
// Author: Colby DaoJensen
// Date: 12/2/24

// addThree - adds the number 3 to the value x in the function
function addThree(x){
    var results = x + 3;
    return results;
}

// testing function
console.log("What's 5 plus 3? ", addThree(5));
console.log("What's 7 plus 3? ", addThree(7));

array = [30, 70, 40, 80, 21];
console.log("My array: ", array);

var result = array.map(addThree);
// should return [33, 73, 43, 83, 24]
console.log("Adding 3 to the array: ", addThree(result));

var result = array.map(function(x){
    var results = x - 10;
    return results;
});

// should return [20, 60, 30, 70, 11]
console.log("Subtracting 10 from the array: ", result);