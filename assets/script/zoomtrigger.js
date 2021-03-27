$(function() {
    $(".imgsample").click(function(){
        $(".zoomincontent").attr("src",$(this).attr('src'));
        $(".zoomindimmer").fadeIn(200);
        $(".zoomin").show();
    });

    $(".zoomincontent,.zoomin").click(function(){
        $(".zoomincontent").attr("src", "");
        $(".zoomindimmer").fadeOut(200);
        $(".zoomin").hide();
    });
});
//HOLY SHIT YOU MADE ME SPENT 3 HOURS JUST FOR THIS
//WHAT THE FUCK IS ATTR