$(function(){
	var w_w=$(window).width();
	var m_l=(1920-w_w)/2;
	//$('.fw .fw_bg img').css('margin-left','-'+m_l+'px');
	
	
	$('.nav_m .n_icon').click(function(){
		$(this).siblings('ul').slideToggle();
	});
	
	$('.i_boxa li:last-child').css('margin-right',0+'px');
	$('.i_news li:nth-child(2n)').css({'border-left':'1px dashed #ccc','margin-left':'22px', 'padding-left':'22px'});
	
	$('.i_bbs dl:nth-child(2n)').css({'border-left':'1px dashed #ccc','margin-left':'22px', 'padding-left':'22px'});
	$('.foot_l .f_dz ul:nth-child(2n)').css({'padding-right':'0px', 'padding-left':'35px', 'border-left':'1px solid #0CBAFF', 'border-right':'0px'});
	
	$('.f_nav a:last-child').css('margin-right',0+'px');
	$('.scd .scd_h a:last-child').css('background','none');
	$('.video li:nth-child(3n)').css('margin-right',0+'px');
	$('.cepin_list ul li:nth-child(3n)').css('margin-right',0+'px');
	$('.video .main_img:nth-child(3n)').css('margin-right',0+'px');
})