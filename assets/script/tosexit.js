function titleEntered() {
    localStorage.setItem("titleEntered", (new Date()).toISOString());
}


const tosHomeButton = document.querySelector('#read')

if (tosHomeButton) {
    tosHomeButton.addEventListener('click', () => {
        titleEntered()
        location.replace("./index.html")
    })
}