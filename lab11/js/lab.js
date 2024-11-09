// index.js - This simple JavaScript/jQuery script gets a value from an
// input field and outputs a modified version.

// Author: Colby DaoJensen
// Date: 11/11/24

// sortString - sorts the characters of a string in alphabetical order.
function sortString(inputString) {
    // converts our string to an array and back again to sort it
    return inputString.split('').sort().join('');
}

// click listener for button
$("#submit").click(function(){
    // gets value of input field
    const userName = $("#user-name").val();
    
    // sorts it
    userNameSorted = sortString(userName);

    // appends a new div to our output div
    $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
});
