$(function(){
	$("#add-btn").click(function(){
		addNewGifBtn($("#search-value").val());
		$("#search-value").val("");
		return false;
	})

	function addNewGifBtn(searchValue){
		var btn = $('<button type="button" class="btn btn-success">' + searchValue + '</button>');
		$("#gif-searches").append(btn);

		btn.click(function() {
			searchValue = $(this).text();
			generateGifs(searchValue);
		});
	}

	var loadArray = ["dog", "cat", "panda", "money", "friends", "dancing"];
	$.each(loadArray, function(index, val) {
		 addNewGifBtn(val);
	});

	function generateGifs(searchValue){
		var giphyLink = "https://api.giphy.com/v1/gifs/search?q=" + searchValue + "&api_key=dc6zaTOxFJmzC&limit=20&offset=0";
		var gifArray;

		$.getJSON(giphyLink, function(json) {
			gifArray = json;

			$('#results').empty();

			$('').click(function (e) {
				e.preventDefault();
			});;
			for(i=0; i<gifArray.data.length; i++){
				appendGif(gifArray.data[i]);
			}
		});
	}


	function appendGif(gifObject)
	{
		var newContainer = $('<div>');
		newContainer.attr('id', 'img-container');

		var newImage = $('<img>');
		newImage.attr('src', gifObject.images.original_still.url);
		newImage.click(function(){playPause(this)});

		var ratingText = $('<p>');
		ratingText.text("Rating: " + gifObject.rating);

		newContainer.append(ratingText).append(newImage);

		$('#results').append(newContainer);
	}

	function playPause(curImg){
		var curPath = $(curImg).attr('src');
		if (curPath.indexOf("_s.gif") !== -1) {	
			var toggledPath = curPath.replace("_s.gif", ".gif");
		} 
		else {
			var toggledPath = curPath.replace(".gif", "_s.gif");
		}
		$(curImg).attr('src', toggledPath);
	}
})
