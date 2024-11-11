// index.js - conditionals
// Author: Colby DaoJensen
// Date: 11/14/24

// returns Gryffindor, Ravenclaw, Slytherin, and Hufflepuff
// depending on length mod 4
function sortingHat(str){
    len = str.length;
    mod = len % 4;
    if (mod == 0){
        return "Gryffindor";
    }
    else if (mod == 1){
        return "Ravenclaw";
    }
    else if (mod == 2){
        return "Slytherin";
    }
    else if (mod == 3){
        return "Hufflepuff";
    }
}

// click listener for button
$("#submit").click(function(){
    // gets value of input field
    const name = $("#input").val();
    
    // sorts it
    house = sortingHat(name);

    // appends a new div to our output div
    $("#output").html('<div class="text"><p>The Sorting Hat has sorted you into ' + house + '</p></div>');
});