$(document).ready(function(){
	$('img[alt="menu"]').click(function(){
		if($('.main-menu').css('width')=='0px'){
			$('.main-menu').animate({'width':'+=388px'},2000);
			$(this).rotate({animateTo:90});
		}else{
			$('.main-menu').animate({'width':'0px'},2000);
			$(this).rotate({animateTo:0});
		}
	});

	$('.main-menu ul li').hover(function(){
//		$(this).animate({'background-color':'#DFF0D8','color':'#DFF0D8', 'text-align':'center'},1000);
		var styles= new Array('active_green','active_yellow','active_red');
		var e_ind=$(this).index(), i=e_ind%3;

		//var i=Math.floor(Math.random()*styles.length);
		$(this).addClass(styles[i]);

	},function(){
		//$(this).animate({'background-color':'#CCCCCC', 'color':'white', 'text-align':'left'},1000);
		$(this).removeClass('active_green');
		$(this).removeClass('active_red');
		$(this).removeClass('active_yellow');
	})
});