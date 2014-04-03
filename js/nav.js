// Genres (0) or Artists (1)
var mode = 0;

$(document).ready(function(){
	$('#chart').css("display", "none");
	$('#menu').css("display", "block");
	$('#btn_back').css("display", "none");
	$('#btn_toggle').css("display", "none");
});

function toVis()
{
    $('#menu').css("display", "none");
	$('#chart').css("display", "block");
	$('#btn_back').css("display", "block");
	$('#btn_toggle').css("display", "block");
}

function toMenu()
{
    $('#menu').css("display", "block");
	$('#chart').css("display", "none");
	$('#btn_back').css("display", "none");
	$('#btn_toggle').css("display", "none");
}

function showArtists()
{

	$('#btn_toggle').text("Switch to Genres").addClass("btn-info").removeClass("btn-success");
}

function showGenres()
{
	$('#btn_toggle').text("Switch to Artists").addClass("btn-success").removeClass("btn-info");
}


document.addEventListener('keydown', function(e) {
    if(e.keyCode == 8 || e.keyCode == 27) {
    	toMenu();
		$('#mTitle').text("Select Playlist Type");
    }
});



$('#btn_back').click(function(){
    toMenu();
	$('#mTitle').text("Select Playlist Type");
});
$('#btn_toggle').click(function(){
    if(mode == 0){
    	showArtists();
    	mode = 1;
    } else {
    	showGenres();
    	mode = 0;
    }
});

$('.chill').click(function () {
	toVis();
	$('#mTitle').text("Chill Music");
    data = allData["Chill"];
    redraw();
});
$('.fun').click(function () {
	toVis();
	$('#mTitle').text("Fun Music");
    data = allData["Fun"];
    redraw();
});
$('.party').click(function () {
	toVis();
	$('#mTitle').text("Party Music");
    data = allData["Party"];
    redraw();
});
$('.relax').click(function () {
	toVis();
	$('#mTitle').text("Relaxing Music");
    data = allData["Relax"];
    redraw();
});
$('.study').click(function () {
	toVis();
	$('#mTitle').text("Study Music");
    data = allData["Study"];
    redraw();
});
$('.workout').click(function () {
	toVis();
	$('#mTitle').text("Workout Music");
    data = allData["Workout"];
    redraw();
});
