  // MODAL
  $('.modal').modal();
  // DROPDOWNS
  $(".dropdown-button").dropdown(
    {
      belowOrigin: true
    }
  );
  // TABS
  $('ul.tabs').tabs();
  // SCROLLSPY
  $('.scrollspy').scrollSpy();
  //SIDENAV
  $(".button-collapse").sideNav();



var string = "Click a button to see a GIF";
var str = string.split("");
var el = document.getElementById('str');
(function animate() {
str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running); 
var running = setTimeout(animate, 90);
})();


var topics= ["Fraiser", "Last Week Tonight", "Mad Men", "Broadchurch", "My So Called Life", "Master of None", "Parks and Rec"];
  

// This is the function that creates the buttons

	function createButton (){

		$("#buttons").empty();

		for (i = 0; i < topics.length; i++) {

	 		var b = $("<button>");
	        	b.addClass("television");
	        	b.attr("data-name", topics[i]);
	        	b.text(topics[i]);
	          	$("#buttons").append(b);
	       }
	}

//This is the function to display the gifs on the page 

	function displayGif (){
		var tv = $(this).attr("data-name"); 

			var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + tv + "&api_key=dc6zaTOxFJmzC&limit=10&rating=g&rating=pg";

		    $.ajax({
		      url: queryURL,
		      method: 'GET'
		    }).done(function(response) {
		    	console.log(response);

		    	var results = response.data;
	
				for (j = 0; j < results.length; j++) {


				var createDiv = $("#gifs").prepend('<div>');
                var ratingData = $("<p>").text("Rating: " + results[i].rating);
                var newDiv = $(createDiv).prepend('<div>');
                newDiv.prepend(ratingData);
                var image = $('<img>')
                newDiv.prepend(image);

                image.addClass("tvGif")
                image.attr("src", results[j].images.fixed_height_still.url);
				image.attr("data-animate", results[j].images.fixed_height.url);
				image.attr("data-still", results[j].images.fixed_height_still.url);
				image.attr("data-state", results[j].images.fixed_height_still.url, "still") 
				image.append(ratingData)
				// image.append(tvGif)

				}

		    });
	}

// This is the function to animate the GIFs

	$(document).on('click', '.tvGif', function(){
		// $(".tvGif").on("click", function() {

        var originalGif = $(this).attr('data-state')

   
              if (originalGif !== 'animate') {
                $(this).attr("src", $(this).attr("data-animate"));
		        $(this).attr("data-state", "animate");
            }

           	else if (originalGif === 'animate') {

				$(this).attr("src", $(this).attr("data-still"));
			    $(this).attr("data-state", "still");
	        }

   	});


//This adds new buttons to the page when the user searches

	$("#add-tv").on("click", function(event) {
	    event.preventDefault();

		var search = $("#tv-input").val().trim();
	    topics.push(search);

	       
	    createButton();
	    // displayGif ();
	});





createButton();

$(document).on('click', ".television", ".tvGif", displayGif);

  $(".button-collapse").sideNav();
