$(function() {
    var pageTitle = $("title").text();
    $(window).blur(function() {
        $("title").text("Hey comeback?");
        $("#thisLink").attr('href', '../images/icons/kisspng-snout-clip-art-sticker-forehead-sticker-telegram-snout-clip-art-others-512-512-t-5b690d71caeec9.3768767915336113778312.png')
    });
    $(window).focus(function() {
        $("title").text(pageTitle);
        $("#thisLink").attr('href', '../images/icons/kisspng-morty-smith-rick-sanchez-tote-bag-handbag-dancing-5ac999364214e8.3534148215231613982707.png')

    });
});

$(document).ready(function() {
    $('.logo').click(function() {
        $('.nav-options').toggleClass('hide-me');
        $('.nav-options').toggleClass('animate-navbar');
    });
    $('.input-group i').click(function(e) {
        e.stopPropagation();
        e.preventDefault();
        $('#wrap').toggleClass('hide-by-op').toggleClass('hide-by-fly');
    })

    $('.parallax-window').parallax({ imageSrc: '../images/wallpapers/751400.png' });
    $('.parallax-window-2').parallax({
        imageSrc: '../images/wallpapers/401073.jpg',
        positionY: 'top',

    });

});

$(document).scroll(function() {
    var $nav = $('nav');
    var $navA = $('.nav-options ul li a');
    var $i = $('.input-group i');

    $nav.toggleClass('bg-green', $(this).scrollTop() > $nav.height());
    $i.toggleClass('scrolledUL', $(this).scrollTop() > $nav.height());
    $navA.toggleClass('scrolledUL', $(this).scrollTop() > $nav.height());
})

$(document).on('click', '#char-info', function(e) {
    e.stopPropagation();
    e.preventDefault();
    $('#char-infobox').removeClass('hide-me');
})

$(document).on('click', '#char-info-close', function(e) {
    e.stopPropagation();
    e.preventDefault();
    $('#char-infobox').addClass('hide-me');
})