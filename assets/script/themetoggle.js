const toggleSwitch = document.querySelector("#ttogle"),
    currentTheme = localStorage.getItem("theme");

function switchTheme(t) {
    t.target.checked ? (document.documentElement.setAttribute("data-theme", "light"), localStorage.setItem("theme", "light"), $(".invertIcon").css(
        {
            'filter': 'invert(0)'
        }), $(".splash").addClass("splashanim"), setTimeout((function () {
            $(".splash").removeClass("splashanim")
        }), 500), $(".theme-icon").text("dark_mode"), $(".togglecont").attr("title", "Change to Dark Mode")) : (document.documentElement.setAttribute("data-theme", "dark"), localStorage.setItem("theme", "dark"), $(".invertIcon").css(
            {
                'filter': 'invert(1)'
            }), $(".splash").addClass("splashanim"), setTimeout((function () {
                $(".splash").removeClass("splashanim")
            }), 500), $(".theme-icon").text("light_mode"), $(".togglecont").attr("title", "Change to Light Mode"))
}
if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);

    if (currentTheme === "light") {
        toggleSwitch.checked = true;
        $(".theme-icon").text("dark_mode");
        $(".togglecont").attr("title", "Change to Dark Mode");
        $(".invertIcon").css({ 'filter': 'invert(0)' });
    } else {
        $(".theme-icon").text("light_mode");
        $(".togglecont").attr("title", "Change to Light Mode");
        $(".invertIcon").css({ 'filter': 'invert(1)' });
    }
}

toggleSwitch.addEventListener("change", switchTheme, false);
