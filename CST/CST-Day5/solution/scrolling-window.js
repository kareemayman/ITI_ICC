function openWindow() {
    let win = window.open('popup-scrolling-window.html', '_blank', 'width=800,height=400')
    win.focus();
    let myInterval = setInterval(function() {
        win.scrollBy(0, 100)
        if (win.scrollY === 849) {
            win.close()
            clearInterval(myInterval)
        }
    }, 350)
}