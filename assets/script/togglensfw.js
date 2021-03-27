$(function(){
    $(".nsfwtoggle").click(function(){
        $(".nsfwtoggle").toggleClass("nsfwactive");
        $(".switchdot").toggleClass("dotactive");
        $(".nsfwopt").toggleClass("hidensfw");
    })
})