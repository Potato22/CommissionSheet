const ntoggleSwitch = document.querySelector("#ntoggle");
const currentNstate = localStorage.getItem("nstate");

function nSwitch(event) {
    if (event.target.checked) {
        if (confirm("You are about to view mature content. -------------------------------\n\nTo comply with Github's TOS, visual explicit sexual depictions could not be displayed except for artistical pieces (ex: non-sexual nudity).\n\nPlease ensure you are 18 years old or older before proceeding and made sure you read my TOS.")) {
            localStorage.setItem("nstate", "true");
            $(".nsfwopt, .nsfwopttitle").removeClass("hidensfw");
            $(".purchase").removeClass("inactivensfw");
            $(".ntogglecont").addClass("n-on");
            $(".ntogglecont").attr("title", "Hide NSFW content");
            $(".replaceimg").addClass("hideimg");
            $(".nsfwimg").removeClass("hideimg");
        } else {
            localStorage.setItem("nstate", "false");
            $(".nsfwopt, .nsfwopttitle").addClass("hidensfw");
            $(".purchase").addClass("inactivensfw");
            $(".ntogglecont").attr("title", "Show NSFW content");
            $(".replaceimg").removeClass("hideimg");
            $(".nsfwimg").addClass("hideimg");
            ntoggleSwitch.checked = false;
        }
    } else {
        localStorage.setItem("nstate", "false");
        $(".nsfwopt, .nsfwopttitle").addClass("hidensfw");
        $(".purchase").addClass("inactivensfw");
        $(".ntogglecont").removeClass("n-on");
        $(".ntogglecont").attr("title", "Show NSFW content");
        $(".replaceimg").removeClass("hideimg");
        $(".nsfwimg").addClass("hideimg");
    }
}

if (currentNstate) {
    if (currentNstate === "true") {
        ntoggleSwitch.checked = true;
        $(".ntogglecont").addClass("n-on");
        $(".ntogglecont").attr("title", "Hide NSFW content");
        $(".nsfwimg").removeClass("hideimg");
        $(".replaceimg").addClass("hideimg");
        $(".nsfwopt, .nsfwopttitle").removeClass("hidensfw");
        $(".purchase").removeClass("inactivensfw");
    } else {
        $(".ntogglecont").removeClass("n-on");
        $(".ntogglecont").attr("title", "Show NSFW content");
        $(".nsfwimg").addClass("hideimg");
        $(".replaceimg").removeClass("hideimg");
        $(".nsfwopt, .nsfwopttitle").addClass("hidensfw");
        $(".purchase").addClass("inactivensfw");
    }
}

ntoggleSwitch.addEventListener("change", nSwitch, false);
