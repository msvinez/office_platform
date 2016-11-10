



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


$("#login-form").submit(function(event) {
	console.log("tesrt");
  // alert("1 done");
 
  // // Stop form from submitting normally
  // event.preventDefault();
  // alert("2 done");
 
  // // Get some values from elements on the page:
  // var $form = $( this ),
  //   username = $form.find( "input[name='username']" ).val(),
  //   password = $form.find( "input[name='password']" ).val(),
  //   url = $form.attr( "action" );
  // alert("3 done");
 
  // // Send the data using post
  // var posting = $.post( url, { username, password } );
  // alert("4 done");
});
