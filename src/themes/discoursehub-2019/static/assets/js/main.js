function newsletterSubmitted(){
	
}

$(document).ready(function(){

	// Toggle main nav
	$( "body > header a.toggle" ).click( function(){
		event.stopPropagation();
		$( "body > header ul.main" ).toggle();
	});


	$( document ).click( function( event ){

		var menu = $( "body > header ul.main" );

		if( $( "body > header a.toggle" ).is( ":visible" ) && menu.is( ":visible" )){
			$( "body > header ul.main" ).hide();
		}
	});

	// Set a nice message when the newsletter is signed up to
	$( "form.newsletter" ).submit(function( event ){
		
		var $form = $( "form.newsletter" );

		$.ajax({
			type: "GET",
			url: $form.attr( "action" ),
			data: $form.serialize(),
			cache: false,
			dataType: "json",
			contentType: "application/json; charset=utf-8",
			error: function( err ){
				alert( "Failed to sign up. Please try again later." );
			},
			success: function( data ){
				$form.empty();
				$form.append( "<p>All set! You're on the list for DocsThursday updates.</p>" );
			}
		});

		event.preventDefault();
	});
});
