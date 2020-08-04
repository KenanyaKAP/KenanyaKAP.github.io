$('.page-scroll').on('click', function(e){
	var dir = $(this).attr('href');
	var elDir = $(dir);
	$('html,body').animate({
		scrollTop: elDir.offset().top - 58
	});
});