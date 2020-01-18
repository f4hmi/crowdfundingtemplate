$( "#search-top" ).click(function() {
    $('.search-top').addClass('open');
});

$( "#close-search-top" ).click(function() {
    $('.search-top').removeClass('open');
});

$( "#nav-menu" ).click(function() {
    $('.nav-menu').addClass('open');
});

$( "#close-nav-menu" ).click(function() {
    $('.nav-menu').removeClass('open');
});

$( "#footer-mid-menu" ).click(function() {
    $('#close-footer-mid-menu').addClass('visible');
    $('#footer-mid-menu').addClass('hidden');
    $('.footer-mid-menu-content').addClass('show');
});

$( "#close-footer-mid-menu" ).click(function() {
    $('#footer-mid-menu').removeClass('hidden');
    $('#close-footer-mid-menu').removeClass('visible');
    $('.footer-mid-menu-content').removeClass('show');
});