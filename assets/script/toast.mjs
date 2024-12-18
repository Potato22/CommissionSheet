const toastAligner = document.querySelector('.toastAlign');
const toastWrapper = document.querySelector('.toastWrap');
const toastIcon = document.querySelector('.toastIcon');
const toastTitle = document.querySelector('.toastTitle');
const toastContent = document.querySelector('.toastText');
const toastButtons = document.querySelector('.toastButtons');
const toastTransformWrap = document.querySelector('.toastTransformWrap');

function toastPush(content = {}, settings = {}) {
    toastQueue.push({ content, settings });
    if (!toasting) nextQueue(); 
}

const DEFAULT_TIMER = 2000;
const POSITION_PRESETS = {
    top: 'calc(-100vh / 3)', 
    center: 'translateY(0)', 
    bottom: 'calc(100vh / 3)', 
};

let delayTimer, expiryTimer, resetTimer;
const toastQueue = []; 
let toasting = false; 

function resetTimers() {
    clearTimeout(delayTimer);
    clearTimeout(expiryTimer);
    clearTimeout(resetTimer);
}

function applyStyles(element, styles) {
    Object.assign(element.style, styles);
}

function toastDismiss() {
    resetTimers(); 
    toastAligner.classList.add('toasted');
    resetTimer = setTimeout(() => {
        toastWrapper.classList.remove('toastPushed', 'toastBoing'); 
        applyStyles(toastAligner, { display: 'none', pointerEvents: 'none' }); 
        nextQueue(); 
    }, 500); 
}

function toastClear() {
    toastQueue.length = 0; 
    toastDismiss(); 
}

function setPosition(position) {
    if (typeof position === 'number') {
        toastTransformWrap.style.transform = `translateY(calc(100vh / ${position}))`;
    } else {
        const preset = POSITION_PRESETS[position] || POSITION_PRESETS.center;
        if (preset.startsWith('calc')) {
            toastTransformWrap.style.transform = `translateY(${preset})`;
        } else {
            toastTransformWrap.style.transform = preset;
        }
    }
}

function configureButtons(buttons) {
    toastButtons.innerHTML = ''; 
    if (!Array.isArray(buttons) || buttons.length === 0) return; 

    const isVertical = buttons.length > 2 || buttons.length === 1;
    applyStyles(toastButtons, {
        flexDirection: isVertical ? 'column' : 'row',
        alignItems: isVertical ? 'center' : buttons.length === 1 ? 'space-between' : 'center',
        display: 'flex',
    });

    buttons.forEach(btn => {
        const btnElement = document.createElement('div');
        btnElement.textContent = btn.label || btn; 
        btnElement.id = (btn.label || btn.id || '').replace(/\s+/g, '_').toLowerCase(); 
        btnElement.className = `tbButton${isVertical ? ' vertical' : ''}`; 
        if (btn.highlight) btnElement.classList.add('highlight'); 
        if (typeof btn.onClick === 'function') btnElement.addEventListener('click', btn.onClick); 
        toastButtons.appendChild(btnElement); 
    });
}

function nextQueue() {
    if (toastQueue.length === 0) { 
        toasting = false;
        return;
    }

    toasting = true; 
    const { content, settings } = toastQueue.shift(); 
    const {
        title = '', 
        text = '', 
        icon = '', 
        iconUrl = '', 
        button = [], 
    } = content;

    const {
        tone = 'fade', 
        duration = DEFAULT_TIMER, 
        delay = 0, 
        position, 
        hold = false, 
        interactive = false, 
        skippable = false, 
    } = settings;

    resetTimers(); 

    delayTimer = setTimeout(() => {

        toastTitle.innerHTML = title;
        toastContent.innerHTML = text;
        toastIcon.style.setProperty('--toastIconUrl', `url('${iconUrl}')`);

        switch (icon) {
            case 'warn':
                toastIcon.classList.add('tiWarn')
                break;
            case 'stop':
                toastIcon.classList.add('tiStop')
                break;
        
            default:
                break;
        }

        applyStyles(toastAligner, {
            display: 'grid', 
            pointerEvents: interactive || skippable || button.length > 0 ? 'auto' : 'none', 
        });

        toastAligner.classList.remove('toasted'); 
        toastWrapper.classList.add(tone === 'boing' ? 'toastBoing' : 'toastPushed'); 

        setPosition(position); 
        configureButtons(button); 

        applyStyles(toastTitle, { display: title ? 'block' : 'none' });
        applyStyles(toastIcon, { display: iconUrl || icon ? 'block' : 'none' });
        applyStyles(toastButtons, { display: button.length > 0 ? 'flex' : 'none' });

        if (!hold && (!interactive || skippable) && button.length === 0) {
            expiryTimer = setTimeout(() => {
                toastDismiss();
            }, duration);
        }
        
        if ((interactive || skippable) && button.length === 0) {
            toastAligner.addEventListener('click', toastDismiss);
        } else {
            toastAligner.removeEventListener('click', toastDismiss)
        }

    }, delay); 
}

export { toastPush, toastDismiss, toastClear };