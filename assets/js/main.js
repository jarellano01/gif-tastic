$(function(){
	$("#add-btn").click(function(){
		addNewGifBtn($("#search-value").val());
		console.log($("#search-value").val())
	})
	function addNewGifBtn(searchValue){
		var btn = $('<button type="button" class="btn btn-success">' + searchValue + '</button>');
		$("#gif-searches").append(btn);
	}

	function generateGifs(){

	}

	function appendGif()
	{
		var btn = $('<button type="button" class="btn btn-success">' + searchValue + '</button>');

	}

	function playPause(){

	}

})