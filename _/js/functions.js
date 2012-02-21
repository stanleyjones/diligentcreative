$(document).ready(function() {
		
	// Scrolling Navigation
			
	$("#navigation a").click(function () {
		var href = $(this).attr("href");
		var destination = $(href).offset().top - 50;
		$("html,body").animate({scrollTop:destination},"slow");
		return false;
	});
 
	// Sliding Clients
 
	var window = $("#clients");
	var width = $(".client:first").width();
	var offset = 0;
	var maxoffset = ($(".client").size() - 1) * width;
	$("#clients").width(maxoffset+width);
 
	buttons();
 
	$("button.next").click(function () {
 		offset += width;
 		$(window).animate({left:-offset},"slow");
 		buttons();
 	});
 
	$("button.prev").click(function () {
 		offset -= width;
 		$(window).animate({left:-offset},"slow");
 		buttons();
	});
 
	function buttons () {
	 	$(".controls button").hide();
	 	if (offset > 0)	{ $(".controls button.prev").show(); }
	 	if (offset < maxoffset) { $(".controls button.next").show(); }
	}
	
});