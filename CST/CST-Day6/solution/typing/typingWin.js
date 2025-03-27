const str = 'Your message will be displayed character by character :) few seconds and this window will terminate...'

const p = document.querySelector('p')

let i = 0

setInterval(() => {
    if (i < str.length) {
        p.textContent += str[i]
        i++

    }
    else {
        setTimeout(() => {
            window.close()
        }, 2000);
    }
}, 150)