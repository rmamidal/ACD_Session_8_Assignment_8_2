$(document).ready(function(){
	// Hide all sections and show main page.
	$('section').hide();
	$('.main_page').show();

	// Login.
	$('.login').on('click',function(){
		$('section').hide();
		$('.login_page,.back_link').show();
	});

	// Sign up.
	$('.signup').on('click',function(){
		$('section').hide();
		$('.signup_page,.back_link').show();
	});
	
	// Back button and logout.
	$('.back_link, .logout').on('click',function(){
		$('section').hide();
		$('.main_page').show();
	});
	
	// Storing data in localstorage on sign up.
	$('.sign_submit').on('click', function(e){
		e.preventDefault(); // stop default even of submit button.
		var userName = $("#txtSignName").val(); // get name.
		var userEmail = $("#txtEmail").val(); // get email.
		var userPwd = $("#txtSignPassword").val(); // get password.
		
		// Check for browser support.
		if(typeof Storage !== 'undefined') {
			// Store data.
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
	
	// Login - check existing user.
	$('.login_submit').on('click', function(e){
		e.preventDefault();

		$('section').hide();
		$('.home_page').show();
		
		// Get data from local storage.
		var signName = localStorage.getItem('uname');
		var signEmail = localStorage.getItem('uemail');
		var signPwd = localStorage.getItem('upwd');

		var logName = $('#txtUsername').val();
		var logpwd = $('#txtpassword').val();
		
		// Match logged in user with local storage data.
		if((logName == signName) && (logpwd == signPwd)) {
			$('#welcomeUser').html('Welcome to ' + logName);
		}
		else {
			// Welcome user.
			$('#welcomeUser').html('User name or Password is incorrect'); 
		}
	});
});
