$(function(){
    var prev = 0;
    var $window = $(window);
    var nav = $('.nav');

    $window.on('scroll', function(){
    var scrollTop = $window.scrollTop();
    nav.toggleClass('hide', scrollTop > prev);
    prev = scrollTop;
    $('.dialogueFrame').removeClass('show');  
    $('#navButton.connect').removeClass('stay'); 
    })

    $('.connect').click(function(){
        $('#navButton.connect').toggleClass('stay');
        $('.dialogueFrame').toggleClass('show');
    })
})