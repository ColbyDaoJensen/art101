// index.js - AJAX
// Author: Colby DaoJensen
// Date: 11/25/24

URL = "https://yesno.wtf/#api";

$('activate').click(function(){
    // Using the core $.ajax() method
    $.ajax({
        // The URL for the request (from the api docs)
        url: URL,
        // The data to send (will be converted to a query string)
        data: { 
                // here is where any data required by the api 
                //   goes (check the api docs)
                id: 123,
                api_key: "blahblahblah",
            },
        // Whether this is a POST or GET request
        type: "GET",
        // The type of data we expect back
        dataType : "json",
        // What do we do when the api call is successful
        //   all the action goes in here
        
        success: function(data) {
            // do stuff
            console.log(data);
        },
        // What we do if the api call fails
        error: function (jqXHR, textStatus, errorThrown) { 
            // do stuff
            console.log("Error:", textStatus, errorThrown);
        }
        .done(function(data) {
            console.log(data);
            // make our JSON data printable
            var printableData = "<pre>" + JSON.stringify(data, null, 2) + "</pre>";
            // put data in webpage
            // $("#output").append("<p>" + JSON.stringify(data));
            // $("#output").append("<p>Here's what you should do when you are bored: <b>" + data.activity);
            // $("#output").append(printableData);
            // $("#output").append("<p>The most stable smart man in the room says: <b>" + data.quote);
            $("#title").html(data.title)
            $("#output").append("<img src=" + data.url + ">");
            $("#output").append("<p>" + data.explanation);
    
        })
    })
});