//FATAL
//CHANGE TO SESSIONSTORAGE
//https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage
function setItem(name, value, days) {
    var d = new Date;
    d.setTime(d.getTime() + 24*60*60*1000*days);
    document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
}
function getItem(name) {
    var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;
}

$(function() {
    $(".tosButton").click(function(e){
        window.location.href = "tos.html";
    })
    if(getItem("tos")=="true"){
        $('.tosBar').addClass("accept");
        $('.tosBound').fadeOut("fast");
    }


    $(".tosButton, .dismiss").click(function(e){
        $('.tosBar').addClass("accept");
        setTimeout(function(){
            $('.tosBound').fadeOut("fast");
        }, 100);
        setItem("tos", "true", 1);
    });

    $( ".tosBound" ).click(function(e) {
        e.preventDefault();
        $('.tosBar').addClass( "ohno" );
        $('.tosBound').addClass("yikes");
        setTimeout(function() {
            $('.tosBar').removeClass( "ohno" );
            $('.tosBound').removeClass("yikes");
        }, 400);
    });
});