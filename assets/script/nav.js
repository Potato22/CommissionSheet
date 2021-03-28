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
    $('.treshold').removeClass('tresholdEnabled');
    $('.nav').removeClass('navButtonHighlight');
    })

    $('.connect').click(function(){
        $('#navButton.connect').toggleClass('stay');
        $('.dialogueFrame').toggleClass('show');
        $('.treshold').toggleClass('tresholdEnabled');
        $('.nav').toggleClass('navButtonHighlight');
    })
    $('.treshold').click(function(){
        $('#navButton.connect').removeClass('stay');
        $('.dialogueFrame').removeClass('show');
        $('.treshold').removeClass('tresholdEnabled');
        $('.nav').removeClass('navButtonHighlight');
    });
})