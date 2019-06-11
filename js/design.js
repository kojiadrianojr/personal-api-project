$(function() {
    var pageTitle = $("title").text();
    $(window).blur(function() {
        $("title").text("Come back and get Schwifty!");
        $("#thisLink").attr('href', '../images/icons/icons8-rick-sanchez-48.png')
    });
    $(window).focus(function() {
        $("title").text(pageTitle);
        $("#thisLink").attr('href', '../images/icons/rick-and-morty-icon-png-26.png')

    });
});