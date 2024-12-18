import { toastPush, toastDismiss, toastClear } from "./toast.mjs";

const ONE_DAY = 864e5; // 86400000 milliseconds = 1 day
const SEVEN_DAY = 6048e5; // 604800000 milliseconds = 7 days
function isTitleSkipped() {
    const titleEntered = localStorage.getItem("titleEntered");
    if (!titleEntered) {
        return false;
    }
    // check expiry
    const timeElapsed = Date.now() - new Date(titleEntered).getTime();
    return timeElapsed <= SEVEN_DAY;
}


const welcomeMat = [
    () => toastPush(
        { text: "Welcome back!" },
        { tone: 'boing', position: 'bottom', delay: 1000 }
    ),
    () => toastPush(
        { text: "Hello again" },
        { tone: 'boing', position: 'bottom', delay: 1000 }
    ),
    () => toastPush(
        { text: "Missed something?" },
        { tone: 'boing', position: 'bottom', delay: 1000 }
    ),
    () => toastPush(
        { text: "I smell like water" },
        { tone: 'boing', position: 'bottom', delay: 1000 }
    ),
];

if (isTitleSkipped()) {
    
    // Randomly select and execute one
    const randomIndex = Math.floor(Math.random() * welcomeMat.length);
    welcomeMat[randomIndex](); // Execute the selected function
    
} else {
    toastPush({
        title: "Have you read my TOS?",
        text: "By proceeding, you agreed to accept my TOS (Terms of Service) and rules!",
        button: [{
            label: "Open TOS",
            onClick: () => {
                toastDismiss()
                location.assign("./tos.html")
            },
            highlight: true,
        },
        {
            label: "I've read it!",
            onClick: () => {
                toastDismiss()
                toastPush({
                    title: "Are you sure?",
                    text: "My TOS may have changed or updated over time, it's a good idea to check every time you come back here",
                    button: [{
                        label: "I am sure",
                        onClick: () => {
                            toastDismiss()
                            toastPush({
                                text: "You took responsibility."
                            })
                        }
                    },
                    {
                        label: "Open TOS",
                        onClick: () => {
                            toastDismiss()
                            location.assign("./tos.html")
                        },
                        highlight: true,
                    }],
                    icon: "warn"
                }, {
                    tone: 'fade'
                })
            }
        }, {
            label: "I'm just checking in ...",
            onClick: () => {
                toastDismiss()
                toastPush({
                    text: "Welcome!"
                }, {
                    duration: 1000
                })
            },
        }],
        icon: "stop"
    }, {
        delay: 1000,
        tone: 'boing'
    })
}
