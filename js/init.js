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
    
    $('header ul.side-nav li a.social-link').hover(function() {
        $(this).addClass('light-blue lighten-2');
        $('i', this).removeClass('black-text');
        $('i', this).addClass('white-text');
    }, function() {
        $(this).removeClass('light-blue lighten-2');
        $('i', this).removeClass('white-text');
        $('i', this).addClass('black-text');
    });

    // window on scroll
    var onScroll = function(event) {
        var scrollHeight = Math.floor($(window).scrollTop());

        var elmHeight = $('#index-banner').offset().top;

        var elmSize = $('#index-banner').outerHeight();

        var navHeight = $('header nav').height();

        // console.log(Math.abs(elmHeight - scrollHeight), elmSize - navHeight);

        if (Math.abs(elmHeight - scrollHeight) > elmSize - navHeight) {
            $('header div.hide').removeClass('hide');
        } else {
            $('header div').addClass('hide');
        }
    };

    $(window).scroll(Materialize.throttle(onScroll, 100));


    /*  initialize skills */

    // get skills from json file
    $.getJSON('js/skills.json', function(json, textStatus) {
        var chips = json.chips;
        // create a chip for each skill
        $.each(chips, function(index, el) {
            // append new chip with given icon
            // and define appropriate handlers
            $('.chips').append(
                $(document.createElement('div'))
                    .addClass('chip')
                    .text(el.tag)
                    .append(
                        $(document.createElement('i'))
                            .addClass('close mdi mdi-' + el.icon)
                            .click(function(event) {
                                $(this).parent().trigger('click')
                                event.preventDefault();
                                event.stopPropagation();
                            })
                    )
                    .click(function(event) {
                        // clear current selected chip
                        $('.chip').removeClass('selected');
                        // select this chip
                        $(this).addClass('selected');
                        // fire selected event and pass in card
                        var card = $(document.createElement('div')).addClass('card-panel').html('<h2 class="center light-blue-text"><i class="mdi mdi-' + el.icon + '"></i></h2><h5 class="center">' + el.tag + '</h5><p>' + el.text + '</p>');
                        $(this).trigger('chip.select', card);
                    })
            )
        });

        // hide the input box, won't be used here
        $('.chips-initial input').addClass('hide');

        $('.chips').on('chip.select', function(event, card) {
            event.preventDefault();
            $('.card-container').html(card);
        });

        $('.chips .chip')[0].click();
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space