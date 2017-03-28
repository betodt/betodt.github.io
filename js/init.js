(function($){
  $(function(){
    $('.button-collapse').sideNav({
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true // Choose whether you can drag to open on touch screens
    });
    // Initialize collapsible (uncomment the line below if you use the dropdown variation)
    $('.collapsible').collapsible();

    $.winSizeSpy();

    $('.scrollspy').scrollSpy({
        scrollOffset: window.innerHeight * 0.3
    });

    $('.dropdown-button').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrain_width: false, // Does not change width of dropdown to that of the activator
        hover: true, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: false, // Displays dropdown below the button
        alignment: 'left' // Displays dropdown with edge aligned to the left of button
    });

    // hover handler for sidebar
    $('header ul.side-nav li:not(:first-child):not(:last-child)').hover(function() {
        $(this).addClass('light-blue lighten-2');
        $('a', this).removeClass('black-text');
        $('a', this).addClass('white-text');
    }, function() {
        $(this).removeClass('light-blue lighten-2');
        $('a', this).removeClass('white-text');
        $('a', this).addClass('black-text');
    });

    // window on scroll
    $(window).scroll(function(event) {
        var scrollHeight = $(window).scrollTop();

        var elmHeight = $('#index-banner').offset().top;

        var elmSize = $('#index-banner').outerHeight();

        var navHeight = $('header nav').height();

        if (Math.abs(elmHeight - scrollHeight) > elmSize - navHeight) {
            $('header div.hide').removeClass('hide').addClass('navbar-fixed');
        } else {
            $('header div.navbar-fixed').removeClass('navbar-fixed').addClass('hide');
        }
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space