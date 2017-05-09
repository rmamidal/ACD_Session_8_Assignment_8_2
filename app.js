$(document).ready(function(){
	$('section').hide();
	$('.main_page').show();

	$('.login').on('click',function(){
		$('section').hide();
		$('.login_page,.back_link').show();
	});

	$('.signup').on('click',function(){
		$('section').hide();
		$('.signup_page,.back_link').show();
	});

	$('.back_link, .logout').on('click',function(){
		$('section').hide();
		$('.main_page').show();
	});

	$('.sign_submit').on('click', function(e){
		e.preventDefault();
		var userName = $("#txtSignName").val();
		var userEmail = $("#txtEmail").val();
		var userPwd = $("#txtSignPassword").val();

		if(typeof Storage !== 'undefined') {
			localStorage.setItem('uname', userName);
			localStorage.setItem('uemail', userEmail);
			localStorage.setItem('upwd', userPwd);
		}
		else {
			alert("Your browser does not support local storages.");
		}
		
		$('section').hide();
		$('.main_page').show();
	});
	$('.login_submit').on('click', function(e){
		e.preventDefault();

		$('section').hide();
		$('.home_page').show();

		var signName = localStorage.getItem('uname');
		var signEmail = localStorage.getItem('uemail');
		var signPwd = localStorage.getItem('upwd');

		var logName = $('#txtUsername').val();
		var logpwd = $('#txtpassword').val();

		if((logName == signName) && (logpwd == signPwd)) {
			$('#welcomeUser').html('Welcome to ' + logName);
		}
		else {
			$('#welcomeUser').html('User name or Password is incorrect'); 
		}
	});
});