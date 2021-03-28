$(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance >= 300) {
        $('.banner').fadeOut();
    } else {
        $('.banner').fadeIn();
    }
});