/*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.
// index.js - anon function and callbacks
// Author: Colby DaoJensen
// Date: 10/31/24
*/

// add button to challenge section
$("#challenge").append("<button id='button-challenge'>Make Special</button>");


// add a click listener to the challenge button
$("#button-challenge").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#challenge").toggleClass("special");
});