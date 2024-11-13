// index.js - loops
// Author: Colby DaoJensen
// Date: 11/18/24

// fizzBuzzBoom - loops over the numbers and outputs the number and the
// matching text for factors
function fizzBuzzBoom(maxNums, factorObj){
    // iterate over all of out numbers
    for (var num = 0; num < maxNums; num++){
        // reset output string
        var outputStr = "";
        // iterate over the factors we got from the HTML
        for (var factor in factorObj){
            // check to see if this num is a multiple of factor
            if (num % factor == 0){
                // if yes, then add text to output string
                outputStr += factorObj[factor];
            }
        }
        // now if we have words in outputStr, format it like this " - Fizzbuzz!"
        if (outputStr){
            outputStr = " - " + outputStr + "!";
        }
        outputToPage(num.toString() + outputStr);
    }
}

function reportError(str){
    outputEl.innerHTML = "<div class='error'>" + str + "</div>";
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
