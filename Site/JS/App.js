( jQuery )( function( $ ) {

  $( function( ) {

    $( '.sidenav' ).sidenav( );
    $( '.header-dropdown' ).dropdown( {
        inDuration: 300,
        outDuration: 225,
        hover: false, // Activate on hover
        belowOrigin: true, // Displays dropdown below the button
        alignment: 'right' // Displays dropdown with edge aligned to the left of button
      }
    );

  } );

} ); // end of jQuery name space
