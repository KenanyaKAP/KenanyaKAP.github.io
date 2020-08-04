$('.page-scroll').on('click', function(e){
	var dir = $(this).attr('href');
	var elDir = $(dir);
	$('html,body').animate({
		scrollTop: elDir.offset().top - 58
	});

	if ($('html,body').width() < 971)
	{
		$(this).attr("data-toggle", "collapse");
	} else
	{
		$(this).removeAttr("data-toggle");
	}
});