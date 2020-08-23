// Collapse Navbar Collapse
$('.page-scroll').on('click', function(){
	$('.navbar-collapse').collapse('hide');
});

// Nav Button
$('.navbar-toggler').on('click', function(){
	if ($(document).scrollTop() <= $('.member').offset().top - 400) {
		if ($('.navbar-toggler').attr("aria-expanded") == 'false'){
			$('.navbar').css("background-color", "#141414");
		} else {
			$('.navbar').css("background-color", "#14141400");
		}
	}
});

// Main Event
$(document).ready(function() {

	// Scroll Event
	$('#scrollDiv').hide();
	$(window).scroll(function() {

		//Background fading
		if ($(document).scrollTop() > $('.member').offset().top - 400) {
			$('.navbar').css("background-color", "#141414");
			$('.navbar-brand').css("font-size", "20px");
			if ($('html,body').width() > 974){
				$('.navbar').css("padding-top", "10px");
			}
		} else {
			$('.navbar').css("background-color", "#14141400");
			$('.navbar-brand').css("font-size", "30px");
			if ($('html,body').width() > 974){
				$('.navbar').css("padding-top", "50px");
			}
		}

		// Closing Navbar
		$('.collapsedd').each(function(i, obj) {
			if ($(obj).attr("aria-expanded") == 'true'){
				$($(obj).attr('href')).collapse('hide');
			}
		});
	});

	// On Click Event
	$(document).click(function () {

		// Closing Navbar
		$('.dropdown-toggle.collapsedd').each(function(i, obj) {
			if ($(obj).attr("aria-expanded") == 'true'){
				$($(obj).attr('href')).collapse('hide');
			}
		});

		// alert($('.member h1').css('font-size'));
	});
});