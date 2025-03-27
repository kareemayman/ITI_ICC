let win = window.open('flying-window.html', '_blank', 'width=300,height=300');
win.focus();
let myInterval = setInterval(function() {
    win.moveBy(100, 100);
    if (win.screenX == 700 && win.screenY == 659) {
        clearInterval(myInterval);
        moveBack()
    }
}, 350)

function moveBack() {
let moveBack = setInterval(function() {
    win.moveBy(-100, -100);
    if (win.screenX == 0 && win.screenY == 0) {
        clearInterval(moveBack);
    }
}, 350)
}