const ONE_DAY = 24 * 60 * 60 * 1000;
const TOS_EXPIRY = 7 * ONE_DAY;

function isTOSAccepted() {
  const tosDate = localStorage.getItem('tosAcceptedAt');


  return tosDate && (new Date(tosDate).getTime() - Date.now()) <= TOS_EXPIRY;
}

function acceptTOS() {
  localStorage.setItem('tosAcceptedAt', (new Date()).toISOString());
}


$(function() {
    $(".tosButton").click(function(e){
        window.location.href = "tos.html";
    })
    if(isTOSAccepted()) {
        console.log("[tosDEBUG] tos already dismissed at "+localStorage.getItem('tosAcceptedAt'))
        $('.tosBar').addClass("accept");
        $('.tosBound').fadeOut("fast");
    } else {
        console.log("[tosDEBUG] no written data")
    }


    $(".tosButton, .dismiss").click(function(){
        $('.tosBar').addClass("accept");
        setTimeout(function(){
            $('.tosBound').fadeOut("fast");
        }, 100);
        acceptTOS();
    });

    $( ".tosBound" ).click(function() {
        $('.tosBar').addClass( "ohno" );
        $('.tosBound').addClass("yikes");
        setTimeout(function() {
            $('.tosBar').removeClass( "ohno" );
            $('.tosBound').removeClass("yikes");
        }, 400);
    });
});
console.log("[tosDEBUG] tosDismissed:"+localStorage.getItem('tosAcceptedAt'))