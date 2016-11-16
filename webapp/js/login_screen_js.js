$(function() {

    $('#login-form-link').click(function(e) {
		$("#login-form").delay(100).fadeIn(100);
 		$("#register-form").fadeOut(100);
		$('#register-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
	$('#register-form-link').click(function(e) {
		$("#register-form").delay(100).fadeIn(100);
 		$("#login-form").fadeOut(100);
		$('#login-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});

});

$("login-form").submit(function(){
	
	var url = "hendlerLogin.class"

	$.ajax({
		type: "POST",
		url: url,
		data: {
			username: $("login-form").find( "input[name='username']" ).val(),
			password: $("login-form").find( "input[name='password']" ).val() 
		},
		success: function(data)
		{
			alert(data);
		}
	});
});