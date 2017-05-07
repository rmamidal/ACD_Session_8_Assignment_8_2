$(document).ready(function(){
	$('section').hide();
	$('.main_page').show();

	$('.login').on('click',function(){
		$('section').hide();
		$('.login_page, .back_link').show();
	});

	$('.signup').on('click',function(){
		$('section').hide();
		$('.signup_page,.back_link').show();
	});

	$('.back_link').on('click',function(){
		$('section').hide();
		$('.main_page').show();
	});
});