const ntoggleSwitch = document.querySelector('#ntoggle');
const currentNstate = localStorage.getItem('nstate');

if (currentNstate) {

    console.log('Currently NSFW is ' + currentNstate)

    if (currentNstate === 'true') {
        ntoggleSwitch.checked = true;
        $(".ntogglecont").addClass("n-on");
        $(".ntogglecont").attr('title', 'Hide NSFW content');
        $(".nsfwimg").removeClass('hideimg')

        $(".replaceimg").addClass('hideimg')
        $(".nsfwopt, .nsfwopttitle").removeClass("hidensfw");
        $(".purchase").removeClass("inactivensfw");
        //REPLACE 2 OF EACH TYPE SHOWCASE IMAGES TO NSFW
        console.log('NSFW is TRUE')
    } else {
        $(".ntogglecont").removeClass("n-on");
        $(".ntogglecont").attr('title', 'Show NSFW content');
        $(".nsfwimg").addClass('hideimg')

        $(".replaceimg").removeClass('hideimg')
        $(".nsfwopt, .nsfwopttitle").addClass("hidensfw");
        $(".purchase").addClass("inactivensfw");
        //REPLACE BACK 2 OF EACH TYPE NSFW SHOWCASE IMAGES
        console.log('NSFW is FALSE')
    }
}

function nSwitch(e) {
    if (e.target.checked) {
        if (confirm("You are about to view mature content on this page, please ensure you are 18 years old or older before proceeding and make sure you read the TOS.") == true) {
            localStorage.setItem('nstate', 'true');
            $(".nsfwopt, .nsfwopttitle").removeClass("hidensfw");
            $(".purchase").removeClass("inactivensfw");
            $(".ntogglecont").addClass("n-on")
            $(".ntogglecont").attr('title', 'Hide NSFW content');
            $(".replaceimg").addClass('hideimg')
            $(".nsfwimg").removeClass('hideimg')
        } else {
            localStorage.setItem('nstate', 'false');
            $(".nsfwopt, .nsfwopttitle").addClass("hidensfw");
            $(".purchase").addClass("inactivensfw");
            $(".ntogglecont").attr('title', 'Show NSFW content');
            $(".replaceimg").removeClass('hideimg')
            $(".nsfwimg").addClass('hideimg')
            ntoggleSwitch.checked = false;
        }
    } else {
        localStorage.setItem('nstate', 'false');
        $(".nsfwopt, .nsfwopttitle").addClass("hidensfw");
        $(".purchase").addClass("inactivensfw");
        $(".ntogglecont").removeClass("n-on")
        $(".ntogglecont").attr('title', 'Show NSFW content');
        $(".replaceimg").removeClass('hideimg')
        $(".nsfwimg").addClass('hideimg')
    }
}

ntoggleSwitch.addEventListener('change', nSwitch, false);