const img = document.querySelector('img');
let imgIndex = 1

function updateImg() {
    img.src = 'images/' + imgIndex + '.jpg';
}
updateImg()

function next() {
    if (imgIndex < 6) {
        imgIndex++
        updateImg()
    }
}

function prev() {
    if (imgIndex > 1) {
        imgIndex--
        updateImg()
    }
}


let myInterval = null
function slideshow() {
    if (myInterval != null) return
    myInterval = setInterval(() => {
        next()
        if (imgIndex === 6) {
            imgIndex = 0
        }
    }, 1000);
}

function stop() {
    if (myInterval === null) return
    clearInterval(myInterval)
    myInterval = null
}