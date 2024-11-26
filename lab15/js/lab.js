// index.js - AJAX
// Author: Colby DaoJensen
// Date: 11/25/24

$("#activate").click(function(){
    // Using the core $.ajax() method
    $.ajax({
        // The URL for the request (from the api docs)
        url: "https://api.chucknorris.io/jokes/random",
        // Whether this is a POST or GET request
        type: "GET",
        // The type of data we expect back
        dataType : "json",
        // What do we do when the api call is successful
        //   all the action goes in here
        
        success: function(data) {
            // do stuff
            $("#NorrisJokes").html(JSON.stringify(data.value));
        },
        // What we do if the api call fails
        error: function (jqXHR, textStatus, errorThrown) { 
            // do stuff
            console.log("Error:", textStatus, errorThrown);
        }
    })
});