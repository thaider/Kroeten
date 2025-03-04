( function ( mw ) {
	$( document ).ready( function() {
		$('.kroeten-ticker').text( mw.message( 'kroeten-ticker' ).text() );
		$('.kroeten-ticker').marquee({
			delayBeforeStart: 0,
			direction: 'right',
			duplicated: true,
			duplicateCount: 50,
			duration: 5000,
			gap: 5,
			startVisible: true
		});
	});
}( mediaWiki ) );

