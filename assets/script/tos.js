const ONE_DAY = 864e5, TOS_EXPIRY = 6048e5;

function isTOSAccepted() {
    const t = localStorage.getItem("tosAcceptedAt");
    return t && Date.now() - new Date(t).getTime() <= 6048e5
}

function acceptTOS() {
    localStorage.setItem("tosAcceptedAt", (new Date).toISOString())
}
$((function () {
    $(".tosButton").click((function (t) {
        window.location.href = "tos.html"
    })), isTOSAccepted() && ($(".tosBar").addClass("accept"), $(".tosBound").fadeOut("fast")), $(".tosButton, .dismiss").click((function () {
        $(".tosBar").addClass("accept"), setTimeout((function () {
            $(".tosBound").fadeOut("fast")
        }), 100), acceptTOS()
    })), $(".tosBound").click((function () {
        $(".tosBar").addClass("ohno"), $(".tosBound").addClass("yikes"), setTimeout((function () {
            $(".tosBar").removeClass("ohno"), $(".tosBound").removeClass("yikes")
        }), 400)
    }))
}));