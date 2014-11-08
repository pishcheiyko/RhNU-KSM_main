$(document).ready(function(){
	$('.news .border').hover(function(){
		$(this).addClass('hovered');
		$(this).find('a img').attr('src','assets/img/hovered_new_link.png');
	}, function(){
		$(this).removeClass('hovered');
		$(this).find('a img').attr('src','assets/img/new_link.png');
	});
});