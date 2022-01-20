$(function(){
    $(document.body).on('click', '.nsfwtoggle', function() {
        $(".nsfwtoggle").toggleClass("nsfwactive");
        $(".switchdot").toggleClass("dotactive");
        $(".nsfwopt").toggleClass("hidensfw");
        $(".purchase").toggleClass("inactivensfw");
        $(".type2").toggleClass("alittlebitmore");
    })
})